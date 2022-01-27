class User < ApplicationRecord

    validates :username, :email, :first_name, :last_name, :password_digest, :session_token, presence: true
    validates :username, :email, :session_token, uniqueness: true
    after_initialize :ensure_session_token
    attr_reader :password

    has_one_attached :photo
    
    def self.find_by_credentials(username, password)
        @user = User.find_by(username: username)

        if @user && @user.is_password?(password)
        @user
        else
        nil
        end
    end

    def password=(password)
        self.password_digest = BCrypt::Password.create(password)
        @password = password
    end 

    def is_password?(password)
        password_object = BCrypt::Password.new(self.password_digest)
        password_object.is_password?(password)
    end

    def reset_session_token!
        self.session_token = SecureRandom::urlsafe_base64
        self.save
        self.session_token
    end
    
    private

    def ensure_session_token
        self.session_token ||= SecureRandom::urlsafe_base64
    end
    

end

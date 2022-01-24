class User < ApplicationRecord

    validates :username, :email, :first_name, :last_name, :password_digest, :session_token, presence: true
    validates :username, :email, :session_token, uniqueness: true
    after_initialize :ensure_session_token
    attr_reader :password

    

end

class User < ApplicationRecord
  validates :email, :session_token, presence: true, uniqueness: true 
  validates :email, length: { in: 3..255 }, format: { with: URI::MailTo::EMAIL_REGEXP }
  validates :password, length: { in: 6..255 }, allow_nil: true
  
  has_secure_password

  before_validation :ensure_session_token
  
  def self.find_by_credentials(email, password)
      user = User.find_by(email: email)
      if user && user.authenticate(password)
          return user
      else
          nil
      end
  end

  def reset_session_token!
      self.session_token = generate_unique_session_token
      self.save!
      self.session_token
  end

  
  private
  
  def generate_unique_session_token
    session_token = SecureRandom.urlsafe_base64
    return session_token unless User.exists?(session_token: session_token)
  end

  def ensure_session_token
      self.session_token ||= generate_unique_session_token
  end

end

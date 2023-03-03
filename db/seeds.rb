# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)
ApplicationRecord.transaction do 
  # puts "Destroying tables..."
  #   # Unnecessary if using `rails db:seed:replant`
    User.destroy_all
    Story.destroy_all 
  
    puts "Resetting primary keys..."
    # For easy testing, so that after seeding, the first `User` has `id` of 1
    ApplicationRecord.connection.reset_pk_sequence!('users')
  
  #   puts "Creating users..."
    # Create one user with an easy to remember username, email, and password:
    User.create!(
      fullname: 'Demo-Lition',
      email: 'demo@user.io', 
      password: 'password'
    )

    User.create!(
      fullname: 'Guest',
      email: 'guest@guest.io',
      password: 'password'
    )
  
    # More users
    10.times do 
      User.create!({
        fullname: Faker::Internet.unique.username(specifier: 4..8),
        email: Faker::Internet.unique.email,
        password: 'password'
      }) 
    end
    
    #Story seeds 
    Story.create!(
      title: 'The Benefits of Practicing Mindfulness Meditation Daily', 
      body: 'Mindfulness meditation is a practice that has been around for thousands of years, and it is becoming increasingly popular in modern times. It involves training your mind to focus on the present moment, without judgment or distraction. There are numerous benefits to practicing mindfulness meditation daily, and in this blog post, we will explore some of them.
      Reduces Stress and Anxiety. One of the most significant benefits of mindfulness meditation is that it can reduce stress and anxiety. When you focus your mind on the present moment, you are less likely to dwell on past or future events that may cause you to feel anxious. As a result, your body is able to relax and your stress levels decrease. Improves Emotional Regulation.
      Another benefit of mindfulness meditation is that it can improve your ability to regulate your emotions. By becoming more aware of your thoughts and feelings, you are better able to recognize when you are experiencing negative emotions and take steps to address them before they spiral out of control. Increases Focus and Concentration
      Practicing mindfulness meditation daily can also improve your ability to focus and concentrate. By training your mind to focus on the present moment, you are strengthening your attention span and making it easier to stay on task. Enhances Self-Awareness. Mindfulness meditation can also help you develop a greater sense of self-awareness. By becoming more in tune with your thoughts, emotions, and physical sensations, you are better able to understand yourself and your reactions to different situations. Boosts Overall Well-Being
      Finally, practicing mindfulness meditation daily can boost your overall well-being. By reducing stress and anxiety, improving emotional regulation, increasing focus and concentration, and enhancing self-awareness, you are likely to feel more balanced, calm, and content in your daily life.
      In conclusion, there are numerous benefits to practicing mindfulness meditation daily. Whether you are looking to reduce stress, improve your emotional regulation, increase your focus and concentration, enhance your self-awareness, or simply boost your overall well-being, mindfulness meditation is a simple and effective tool that can help you achieve your goals.',
      author_id: 1 
    )

    Story.create!(
      title: 
    )


  end
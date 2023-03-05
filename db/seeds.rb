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
    ApplicationRecord.connection.reset_pk_sequence!('users');
    ApplicationRecord.connection.reset_pk_sequence!('stories');

  
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
      body: "Meditation has been practiced for centuries and has become increasingly popular in recent years due to its many benefits. From reducing stress and anxiety to improving sleep and concentration, meditation has been shown to have a positive impact on both physical and mental health. In this post, we'll explore the benefits of meditation and how it can improve your life. ...",
      author_id: 1 
    )

    Story.create!(
      title: "5 Simple Strategies to Boost Your Productivity Today", 
      body: "In today's fast-paced world, productivity has become a key factor in achieving success. Whether you're a student, an entrepreneur, or an employee, being productive can help you accomplish more in less time and ultimately lead to greater satisfaction in life. However, many people struggle to stay productive and often feel overwhelmed by their workload. If you're looking for ways to boost your productivity, here are 5 simple strategies you can try today.",
      author_id: 2 
    )

    Story.create!(
      title: "10 Tips for Building a Successful Startup",     
      body: "Starting a business is an exciting but challenging endeavor. While there's no magic formula for success, there are certain strategies that can help you build a strong foundation for your startup. In this post, we'll share 10 tips for building a successful startup, from identifying your target audience to staying adaptable and resilient.",
      author_id: 3 
    )

    Story.create!(
      title: "How AI is Revolutionizing Healthcare and Medicine",
      body: "AI is slowly taking over the world. We have not seen even the majority of what AI can do. What we've been exposed as of recently has just been surface level. Imagine all the possibilities that AI can do for the health of the world. Automated caring for patients will alleviate the work load off healthcare workers allowing them to be efficent and productive in other areas. Human error of picking medicine will be reduced.",
      author_id: 4
    )

    Story.create!(
      title: "Why Traveling is Good for Your Mental Health",
      body: "Traveling can be a life-changing experience, opening up new perspectives, cultures, and ways of thinking. But did you know that traveling can also be good for your mental health? Studies have shown that traveling can help reduce stress, anxiety, and depression, and improve overall well-being. This is because traveling exposes us to new environments, people, and experiences, which can help us break out of our routines and gain a fresh perspective on life. So the next time you're feeling overwhelmed or stuck in a rut, consider planning a trip to a new destination to give your mental health a boost!",
      author_id: 5
    )

    Story.create!(
      title: "5 Essential Skills for Effective Communication",
      body: "Effective communication is a vital skill in both personal and professional settings. Whether you're trying to build relationships, manage a team, or negotiate with clients, good communication skills can help you convey your message clearly and build trust and rapport. In this post, we'll explore 5 essential skills for effective communication, including active listening, clarity, empathy, assertiveness, and nonverbal communication. By mastering these skills, you can become a more effective communicator and achieve greater success in your personal and professional life.",
      author_id: 6
    )

    Story.create!(
      title: "The Power of Mindfulness: How It Can Transform Your Life",
      body: "Mindfulness is the practice of being fully present and aware of the moment, without judgment or distraction. While it may sound simple, the benefits of mindfulness are numerous, including reduced stress and anxiety, increased focus and concentration, and improved emotional regulation. In this post, we'll explore the power of mindfulness and how it can transform your life. From simple breathing exercises to guided meditations, there are many ways to incorporate mindfulness into your daily routine and reap the benefits of this transformative practice.",
      author_id: 7 
    )


  end
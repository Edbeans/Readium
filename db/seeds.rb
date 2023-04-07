# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)
# ApplicationRecord.transaction do 
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
        fullname: Faker::Internet.unique.username(specifier: 4..8).capitalize,
        email: Faker::Internet.unique.email,
        bio: Faker::Lorem.paragraph(sentence_count: 1),
        password: 'password'
      }) 
    end
    
    #Story seeds 
    Story.create!(
      title: "The Importance of Setting Realistic Goals", 
      body: "Setting goals is an essential aspect of personal and professional growth. It gives us direction and purpose, helps us prioritize our efforts, and provides a sense of achievement when we reach them. However, setting unrealistic goals can have negative consequences on our self-esteem and motivation. In this blog post, we'll explore the importance of setting realistic goals and how it can positively impact our lives.

      Avoiding disappointment
      Setting unrealistic goals can lead to disappointment, which can be demotivating. For instance, setting a goal to lose 30 pounds in a month is an unrealistic expectation, which can be impossible to achieve. Failing to achieve such goals can lead to frustration and self-doubt, ultimately demotivating you from pursuing future goals. On the other hand, setting achievable goals, such as losing 1-2 pounds per week, can be more sustainable and realistic.
      
      Boosting self-esteem
      Setting and achieving realistic goals can boost your self-esteem and confidence. When you set a realistic goal, you can track your progress and achieve milestones along the way. This sense of accomplishment can help build your confidence and give you the motivation to pursue bigger and more challenging goals in the future. Small wins matter and can serve as stepping stones to achieve bigger goals.
      
      Improving motivation
      Setting unrealistic goals can be discouraging and demotivating, leading to a lack of motivation. However, setting realistic goals that challenge you but are still achievable can be motivating. It gives you a clear path to success, and as you achieve each step, you feel more confident and motivated to keep pushing towards your goal.
      
      Creating a sense of purpose
      Setting realistic goals helps create a sense of purpose in life. Having a purpose is crucial in achieving fulfillment and happiness in life. When you set realistic goals that align with your values, you have a clear understanding of what you want to achieve, and you can work towards it with clarity and focus.
      
      In conclusion, setting realistic goals is essential for personal and professional growth. It helps you avoid disappointment, boosts your self-esteem and motivation, and gives you a sense of purpose. When setting your goals, ensure that they are specific, measurable, achievable, relevant, and time-bound (SMART). These types of goals will help you stay focused, track your progress, and achieve your desired outcomes. Remember, realistic goals are not easy goals, but they are achievable with consistent effort and dedication.",
      author_id: 1 
    )

    Story.create!(
      title: "The Benefits of Practicing Mindfulness", 
      body: "In today's fast-paced world, it's easy to get caught up in the chaos of everyday life. We often find ourselves multitasking, worrying about the past, or feeling anxious about the future. Practicing mindfulness can help us bring our focus back to the present moment, reducing stress and improving our overall well-being. In this blog post, we'll explore the benefits of practicing mindfulness and how it can positively impact our lives.

      Reducing stress and anxiety
      Practicing mindfulness can reduce stress and anxiety by bringing your attention to the present moment. By focusing on your breath, thoughts, and sensations, you can calm your mind and reduce the physiological responses associated with stress and anxiety. Mindfulness can also help you develop a non-judgmental attitude towards your thoughts and emotions, allowing you to observe them without getting caught up in them.
      
      Improving focus and concentration
      Mindfulness can improve your focus and concentration by training your mind to stay in the present moment. This practice can help you tune out distractions and improve your ability to stay focused on the task at hand. Additionally, mindfulness can enhance your working memory, allowing you to better retain information and perform complex tasks more effectively.
      
      Enhancing self-awareness
      Practicing mindfulness can enhance your self-awareness by helping you recognize your thoughts and emotions. This awareness can help you identify negative thought patterns and behaviors that may be holding you back. By becoming more aware of your thoughts and emotions, you can develop a better understanding of yourself and your relationships with others.
      
      Improving physical health
      Mindfulness has been shown to improve physical health by reducing stress and anxiety, improving sleep quality, and lowering blood pressure. Mindfulness can also improve your immune system's response, reducing inflammation in the body and improving overall health.
      
      Enhancing emotional well-being
      Practicing mindfulness can enhance your emotional well-being by promoting positive emotions such as gratitude, compassion, and happiness. By focusing on the present moment, you can let go of negative thoughts and emotions and cultivate a more positive outlook on life.
      
      In conclusion, practicing mindfulness can have a positive impact on your overall well-being. It can reduce stress and anxiety, improve focus and concentration, enhance self-awareness, improve physical health, and enhance emotional well-being. To start practicing mindfulness, try setting aside a few minutes each day to focus on your breath and observe your thoughts and emotions without judgment. With consistent practice, you can reap the benefits of mindfulness and improve your quality of life.",
      author_id: 2 
    )

    Story.create!(
      title: "The Power of Positive Thinking: How It Can Change Your Life",     
      body: "Positive thinking is a powerful tool that can have a profound impact on our lives. It can improve our mood, boost our self-confidence, and help us achieve our goals. On the other hand, negative thinking can hold us back, lead to self-doubt, and hinder our progress. In this blog post, we'll explore the power of positive thinking and how it can change your life.

      Boosting self-confidence
      Positive thinking can boost your self-confidence by focusing on your strengths and achievements. When you think positively, you are more likely to take on new challenges, try new things, and believe in your abilities. This self-confidence can translate into all areas of your life, from personal relationships to professional development.
      
      Improving physical health
      Positive thinking can improve your physical health by reducing stress and promoting healthy behaviors. When you think positively, you are less likely to experience chronic stress, which can lead to a host of health problems such as high blood pressure, heart disease, and obesity. Positive thinking can also motivate you to engage in healthy behaviors such as exercise, healthy eating, and getting enough sleep.
      
      Enhancing emotional well-being
      Positive thinking can enhance your emotional well-being by promoting positive emotions such as joy, gratitude, and contentment. When you think positively, you are more likely to experience positive emotions, which can improve your mood, reduce anxiety and depression, and increase your overall sense of well-being.
      
      Achieving goals
      Positive thinking can help you achieve your goals by increasing your motivation and persistence. When you think positively, you are more likely to believe that you can achieve your goals, which can motivate you to take action towards achieving them. Additionally, positive thinking can help you overcome obstacles and setbacks, which are inevitable on the road to success.
      
      Improving relationships
      Positive thinking can improve your relationships by promoting empathy, kindness, and understanding. When you think positively, you are more likely to approach your relationships with an open mind and heart, which can lead to better communication, trust, and intimacy.
      
      In conclusion, positive thinking is a powerful tool that can change your life. It can boost your self-confidence, improve your physical health, enhance your emotional well-being, help you achieve your goals, and improve your relationships. To start thinking positively, try focusing on your strengths and achievements, practicing gratitude, and reframing negative thoughts into positive ones. With consistent practice, you can transform your life with the power of positive thinking.",
      author_id: 3 
    )

    Story.create!(
      title: "Why Lifelong Learning is Essential for Personal Growth",
      body: "Lifelong learning is the ongoing pursuit of knowledge and skills throughout your entire life. It is the process of acquiring new knowledge, skills, and perspectives that can lead to personal growth and development. In today's rapidly changing world, lifelong learning is more important than ever before. In this blog post, we'll explore why lifelong learning is essential for personal growth.

      Stimulating personal growth
      Lifelong learning can stimulate personal growth by exposing you to new ideas, perspectives, and ways of thinking. When you engage in lifelong learning, you challenge your existing beliefs and assumptions, which can help you grow as a person. Additionally, lifelong learning can help you develop new skills and abilities, which can improve your personal and professional life.
      
      Enhancing career prospects
      Lifelong learning can enhance your career prospects by helping you stay up-to-date with the latest developments in your field. When you engage in lifelong learning, you can acquire new skills and knowledge that can make you a more valuable employee. Additionally, lifelong learning can help you identify new career opportunities and advance your career.
      
      Improving cognitive function
      Lifelong learning can improve your cognitive function by keeping your brain active and engaged. When you engage in lifelong learning, you challenge your brain to think in new ways, which can improve your memory, attention, and problem-solving abilities. Additionally, lifelong learning can reduce the risk of cognitive decline and dementia as you age.
      
      Fostering personal fulfillment
      Lifelong learning can foster personal fulfillment by allowing you to pursue your passions and interests. When you engage in lifelong learning, you can explore new hobbies, learn new skills, and pursue your intellectual curiosity. Additionally, lifelong learning can provide a sense of purpose and meaning in life, which can contribute to overall happiness and well-being.
      
      Building a sense of community
      Lifelong learning can build a sense of community by connecting you with like-minded individuals who share your interests and passions. When you engage in lifelong learning, you can join classes, workshops, and online communities where you can meet new people and learn together. Additionally, lifelong learning can provide opportunities for networking and socializing, which can enhance your social life and overall well-being.
      
      In conclusion, lifelong learning is essential for personal growth. It can stimulate personal growth, enhance career prospects, improve cognitive function, foster personal fulfillment, and build a sense of community. To engage in lifelong learning, try setting aside time each day or week to read, take courses, learn new skills, or pursue your passions. With consistent practice, you can reap the benefits of lifelong learning and transform your life.",
      author_id: 4
    )

    Story.create!(
      title: "The Importance of Building Resilience for Mental Health",
      body: "Resilience is the ability to adapt and bounce back from adversity, challenges, and stressors. Building resilience is essential for maintaining good mental health, especially in today's fast-paced and unpredictable world. In this blog post, we'll explore the importance of building resilience for mental health.

      Coping with stress
      Building resilience can help you cope with stress more effectively. When you are resilient, you have the ability to bounce back from difficult situations and cope with stressors in a healthy way. Additionally, resilient individuals are less likely to experience chronic stress, which can lead to a host of mental and physical health problems.
      
      Overcoming obstacles
      Building resilience can help you overcome obstacles and setbacks in life. When you encounter obstacles, you can draw on your resilience to stay motivated and persist through difficult times. Additionally, resilient individuals are better equipped to handle failure and rejection, which are inevitable on the road to success.
      
      Improving self-esteem
      Building resilience can improve your self-esteem and self-confidence. When you are resilient, you believe in your ability to overcome challenges and achieve your goals. This self-confidence can translate into all areas of your life, from personal relationships to professional development.
      
      Reducing anxiety and depression
      Building resilience can reduce the risk of anxiety and depression. Resilient individuals are better able to manage their emotions and regulate their mood, which can help prevent the onset of anxiety and depression. Additionally, building resilience can provide a sense of purpose and meaning in life, which can contribute to overall happiness and well-being.
      
      Strengthening relationships
      Building resilience can strengthen your relationships by promoting empathy, kindness, and understanding. When you are resilient, you are better able to communicate effectively and work through conflicts with others. Additionally, resilient individuals are more likely to form healthy and supportive relationships, which can improve overall well-being.
      
      In conclusion, building resilience is essential for maintaining good mental health. It can help you cope with stress, overcome obstacles, improve self-esteem, reduce anxiety and depression, and strengthen relationships. To build resilience, try practicing self-care, developing a strong support system, setting realistic goals, and reframing negative thoughts into positive ones. With consistent practice, you can build resilience and transform your life.",
      author_id: 5
    )

    Story.create!(
      title: "The Health Benefits of Blueberries: Why You Should Eat More of This Superfood",
      body: "Blueberries are small, sweet, and packed with nutrients that can improve your health in a variety of ways. Whether you eat them fresh or frozen, these tiny superfoods are a great addition to any diet. In this blog post, we'll explore the health benefits of blueberries and why you should eat more of them.

      Rich in antioxidants
      Blueberries are loaded with antioxidants, which are compounds that protect your body from damage caused by free radicals. Free radicals are unstable molecules that can damage your cells and contribute to the development of chronic diseases such as cancer, heart disease, and Alzheimer's disease. Blueberries are one of the richest sources of antioxidants, making them a powerful ally in the fight against disease.
      
      Good for heart health
      Blueberries are good for heart health, as they are rich in fiber, vitamin C, and potassium. These nutrients can help lower blood pressure, reduce inflammation, and improve cholesterol levels, all of which are important for maintaining a healthy heart. Additionally, the antioxidants in blueberries can help prevent oxidative stress, which is a major contributor to heart disease.
      
      Boost brain function
      Blueberries are known for their ability to boost brain function, especially in older adults. Studies have shown that eating blueberries can improve cognitive function, including memory, attention, and decision-making abilities. This may be due to the high levels of antioxidants in blueberries, which can protect the brain from damage caused by free radicals.
      
      Aid in digestion
      Blueberries are a good source of dietary fiber, which can aid in digestion and promote bowel regularity. Fiber helps to keep you feeling full and satisfied, which can prevent overeating and promote healthy weight management.
      
      Versatile in cooking
      Blueberries are a versatile fruit that can be enjoyed in a variety of ways. They can be eaten fresh, added to smoothies or oatmeal, baked into muffins or pancakes, or frozen for later use. They are also a great addition to salads, yogurt, and desserts, providing a sweet and healthy boost of flavor.
      
      In conclusion, blueberries are a small but mighty superfood that can improve your health in many ways. Whether you are looking to protect your heart, boost brain function, aid in digestion, or simply enjoy a sweet and healthy snack, blueberries are a great choice. So, next time you're at the grocery store, be sure to pick up some fresh or frozen blueberries and start reaping the many health benefits of this amazing fruit.",
      author_id: 6
    )

    Story.create!(
      title: "The Rise and Legacy of Jay Z: A Look at the Life and Career of One of Hip-Hop's Greatest Artists",
      body: "Jay Z, born Shawn Corey Carter, is a legendary rapper, entrepreneur, and philanthropist who has made an indelible mark on the world of hip-hop and beyond. With a career spanning more than three decades, he has become one of the most influential and successful artists of his time. In this blog post, we'll take a closer look at the life and career of Jay Z, and his lasting impact on music and culture.

      Early Life and Career
      
      Jay Z was born and raised in Brooklyn, New York, where he grew up in poverty and experienced the challenges of inner-city life. He began his music career in the late 1980s as a rapper and formed his own record label, Roc-A-Fella Records, in 1995. His debut album, \"Reasonable Doubt,\" released in 1996, was a critical and commercial success, earning him widespread recognition and paving the way for his future success.
      
      Success and Legacy
      
      Throughout the 2000s, Jay Z continued to dominate the hip-hop scene with hit albums such as \"The Blueprint\" and \"The Black Album.\" He also expanded his business ventures, launching his own clothing line, Rocawear, and investing in various businesses, including the streaming service Tidal. In addition to his success in music and business, Jay Z has also been involved in philanthropy, supporting causes such as education and social justice.
      
      Jay Z's legacy extends beyond his music and business success. He has been a cultural icon, influencing fashion, language, and even politics. He has collaborated with some of the biggest names in music, including Beyoncé, Rihanna, and Kanye West, and has been a mentor to many up-and-coming artists. He has also been recognized for his contributions to music and culture, including being inducted into the Songwriters Hall of Fame in 2017.
      
      Conclusion
      
      Jay Z is a true legend of hip-hop and a role model for aspiring artists and entrepreneurs. His music, business ventures, and philanthropy have made a significant impact on the world and have inspired countless people to pursue their dreams. As he continues to evolve and expand his influence, it is clear that Jay Z's legacy will endure for generations to come.",
      author_id: 7 
    )

    100.times do 
      Response.create!(
        story_id: Faker::Number.between(from: 1, to: 7),
        author_id: Faker::Number.between(from: 2, to: 10),
        body: Faker::Lorem.paragraph(sentence_count: 2)
      )
    end

    puts "Seeding done!"
  # end
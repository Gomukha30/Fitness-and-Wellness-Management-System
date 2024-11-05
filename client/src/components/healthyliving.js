import React, { useState } from 'react';
import { FaRegThumbsUp, FaShareAlt, FaComment } from 'react-icons/fa';
import article1 from '../assets/article1.png';
import image1 from '../assets/image1.png';
import slide3 from '../assets/slide3.png'; // Path to your background image


const HealthyLiving = () => {
  const [selectedOption, setSelectedOption] = useState('');

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  const handleLikeClick = () => {
    // Handle like functionality
    console.log('Liked');
  };

  const handleShareClick = () => {
    // Handle share functionality
    console.log('Shared');
  };

  const handleCommentSubmit = (comment, rating) => {
    // Handle comment submission
    console.log('Comment:', comment);
    console.log('Rating:', rating);
  };

  const renderContent = () => {
    switch (selectedOption) {
      case 'articles':
        return renderArticles();
      case 'recipes':
        return renderRecipes();
      case 'videos':
        return renderVideos();
      default:
        return null;
    }
  };

  const renderArticles = () => {
    // Dummy data for articles
    const articles = [
        { id: 1, title: 'Article 1', briefContent: 'Push-ups are a compound exercise, meaning that they target many muscles at once. All of the workouts below include push-ups or exercises that support the development of the muscles necessary to perform a push-up: chest presses, chest flies, planks, and more.These workouts also incorporate a variety of push-up variations to support diverse muscle development. The training types below are primarily strength training but also include a little yoga, cardio, and more. This list is not meant to be followed in a programmatic manner (in a specific order) but rather to give you a sense of the types of workouts that will help you work toward this goal.  This upper body workout makes for a great burnout round, and it’s excellent for increasing strength in order to be able to do more push ups. You can use this at the end of a longer workout, or you can add a warm up and cool down and use it as a standalone routine.here are plenty of repetitions to enjoy in this upper body focused strength routine! We target the major push and pull muscles in this multi-circuit session with a secondary focus on a few push-ups variations during the intermissions.',
         fullContent: 'Full content for article 1', imageUrl: 'article1.jpg', readTime: '5 min' },
        { id: 2, title: 'Article 2', briefContent: 'Our body image is not something we often take the time to explicitly think about. Thoughts and feelings about our bodies are always running in the background, but are not always part of our conscious narrative. Because of this, our body image can impact our decisions around food and movement without our awareness — and sometimes in unhelpful ways. Therefore, the purpose of the following journal prompts is to get you thinking about how you think and feel about your body and to be intentional about working toward a body image that supports a thriving life.Set a timer for ten minutes (or however long you have) and commit to writing the whole time about what you are working on when it comes to your body image. Don’t worry about whether it “sounds right,”  if it sounds pretty, or anything else. Think of this as a brain dump where you write down whatever comes to mind. Feel free to write a bulleted list, type up your thoughts, or even audio record them on your phone. This is only for you and your own life; in theory, nobody will even see it unless you show it to them. Stay present when you are eating meals and getting in movement. Be sure to identify how what you eat and how you move make you feel physically and emotionally. Within the Diagnostic and Statistical Manual (DSM), addictions are broken into two categories, including those that are substance-related and those that are behavioral (shopping, gambling, etc.). Addiction is when a person feels a compelling need or urge to repeat the activity or substance they are addicted to, often in increasing amounts, despite knowing there are/will be significant negative consequences for the behavior. ', 
        fullContent: 'Full content for article 2', imageUrl: 'article2.jpg', readTime: '7 min' },
        { id: 3, title: 'Article 3', briefContent: 'Addiction treatment is rarely straightforward. People with addictions often struggle on and off for long periods of time and relapse is part of the process. As much as we wish that it were as easy to “just stop,” that is simply not the reality of addiction. Scientists have long known that addiction is a disease with many complex contributing factors (including biological, genetic, behavioral, social, and psychological factors), and yet society still blames people for their addictions.This societal stigma often makes treatment even more difficult. In addition, with so many contributing factors to why people even experience addiction in the first place, there is no singular “cure” for addictions and it must be treated with a multifaceted approach. One such approach that is frequently overlooked, but might be incredibly powerful in the recovery process, is exercise. This article will talk about the evidence regarding the efficacy of exercise in addiction recovery.',
        fullContent: 'Full content for article 3', imageUrl: 'article3.jpg', readTime: '6 min' },
        { id: 4, title: 'Article 4', briefContent: 'Just recently, my friend and I went to a cooking class for making gnocchi from scratch (it was delicious, by the way). My friend and I kept calling our gnocchi pieces “fat boys” because they were so heavy they were sticking to the bottom of the pot. The teacher of the class overheard and, me being 9 months pregnant at the time (very obviously pregnant), joked that I will be a mean mother. Putting aside the strange prenatal parental shaming for another day, it did get me wondering about the connections between how we talk (generally) and how this impacts our children’s body image.Biopsychosocial models of body image suggest that biological factors (like BMI), psychological factors (like levels of negative emotions and self-esteem), and social factors (like parental/peer socialization, cultural messaging, media messaging, etc.) all impact how we tend to view our bodies (Ricciardelli et al., 2003). The primary place that we, as parents, have any semblance of control over, is the environment we provide at home that sets our children up for body image success.However, as human adults, we are also inundated with mixed messaging regarding body image, weight, body ideals, and much more. Combined with a hyperfocus on what hurts our children’s body image, many parents are left wondering what they can and should do to help their children develop and maintain a positive body image. In this article, I am particularly focusing on factors that contribute to positive body image when it comes to body shape/size and not on other facets of our appearance (like hair, skin, etc.) that contribute to body image.Avoid social comparisons in your speech, regardless of whether you are comparing yourself, other people, etc.    ', 
        fullContent: 'Full content for article 4', imageUrl: 'article4.jpg', readTime: '8 min' }
      ];

    
    
      return (  
        <div>
          <h2 className="text-xl font-semibold mb-4">Expert Articles</h2>
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
            {articles.map(article => (
              <div key={article.id} className=" bg-indigo-100 rounded-lg shadow-md p-4">
                <img src={article1} alt={article.title} className="w-full h-40 object-cover mb-4 rounded-md" />
                <h2 className="text-lg font-semibold mb-2">{article.title}</h2>
                <p className="text-sm text-black mb-2">{article.briefContent}</p>
                {/* {expandedArticleId === article.id ? (
                  <div>
                    <p className="text-sm text-black mb-2">{article.fullContent}</p>
                    <button className="text-gray-500 hover:text-gray-600 mt-2" onClick={() => toggleExpand(article.id)}>Read less</button>
                  </div>
                ) : (
                  <div>
                    <p className="text-sm text-black mb-2">{article.briefContent}</p>
                    <button className="text-gray-500 hover:text-gray-600 mt-2" onClick={() => toggleExpand(article.id)}>Read more</button>
                  </div>
                )} */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <button className="text-blue-500 hover:text-blue-600" onClick={handleLikeClick}>
                      <FaRegThumbsUp /> Like
                    </button>
                    <button className="text-gray-500 hover:text-gray-600" onClick={handleShareClick}>
                      <FaShareAlt /> Share
                    </button>
                    <button className="text-gray-500 hover:text-gray-600">
                      <FaComment /> Comment
                    </button>
                  </div>
                  <p className="text-gray-500 text-sm">{article.readTime} read</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      );
    };
  const renderRecipes = () => {
    // Dummy data for recipes
    const recipes = [
      { id: 1, title: 'Recipe 1', briefContent: 'Ingredients: pan release spray 2 ½ oz.whole wheat tortillas 1 each ½ oz.mozzarella ¼ tsp.taco seasoning½ Tbsp.scallions Preparation Instructions :Preheat oven to 400°F or 200°C. Line a medium baking sheet with parchment paper and lightly grease with cooking spray.Place whole wheat tortilla on a clean cutting board and cut into wedges.Transfer the tortilla wedges to the prepared baking sheet, lightly spritz the tops of the tortillas with cooking spray, and sprinkle with taco seasoning, mozzarella, and scallions.Place in the oven and bake for 5-8 minutes or until crispy and golden brown. Remove from the oven and transfer to a wire rack to cool.', 
      fullContent: 'Full content for recipe 1', imageUrl: 'recipe1.jpg',imageUrl: 'recipe1.jpg', readTime: '20 min', mealType: 'Breakfast', dietaryType: 'Vegetarian', preparationTime: '10 min', cookingTime: '10 min' },
      { id: 2, title: 'Recipe 2', briefContent: 'Ingredients: pan release spray ½ cup green bell pepper diced ½ cup red bell pepper diced 2 Tbsp. red onion peeled and diced 1 tsp. garlic peeled and minced 4 oz. ground turkey 1 cup canned diced tomatoes ½ cup low sodium vegetable broth 1 cup brown rice cooked 1 ½ Tbsp. scallions chopped Preparation Instructions: Moderately spritz a medium saucepan with pan release spray and heat oven to medium. Add the green bell peppers, red bell peppers, onion, and garlic to the saucepan and sauté for 2-3 minutes, or until tender-crisp and fragrant.Crumble the ground turkey into the saucepan, stir to combine with the veggies, and continue to cook for 2-3 minutes, or until the ground turkey has browned and is cooked through. Add the diced tomatoes and broth, stir to combine with the turkey and veggies, and bring to a simmer. Simmer for 10 minutes, stirring occasionally. Add the cooked rice to the saucepan, stir to combine the soup, and season to taste with salt and pepper.Spoon or ladle soup into a bowl and garnish with chopped scallions before serving.', 
      fullContent: 'Full content for recipe 2', imageUrl: 'recipe2.jpg',imageUrl: 'recipe2.jpg', readTime: '30 min', mealType: 'Lunch', dietaryType: 'Vegan', preparationTime: '15 min', cookingTime: '15 min' },
      { id: 3, title: 'Recipe 3', briefContent: 'Ingredients: pan release spray 2 oz. lean ground turkey ¼ tsp. poultry seasoning ¼ tsp. garlic powder .Preparation Instructions: Lightly grease a medium non-stick skillet with pan release spray and slowly heat over medium-high.Place ground turkey in a medium bowl and season with garlic, poultry seasoning, and a small pinch of salt. Using your hands, mix to combine and divide into 2 patties.Once the skillet is hot, add the turkey sausage patties and cook for about 2 minutes per side, or until cooked through. Remove the sausage patties from the skillet and serve.', 
      fullContent: 'Full content for recipe 3', imageUrl: 'recipe3.jpg',imageUrl: 'recipe3.jpg', readTime: '25 min', mealType: 'Dinner', dietaryType: 'Gluten-Free', preparationTime: '12 min', cookingTime: '13 min' }
    ];

    return (
      <div>
        <h2 className="text-xl font-semibold mb-4">Healthy Recipes</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {recipes.map(recipe => (
            <div key={recipe.id} className="bg-indigo-100 rounded-lg shadow-md p-4">
              <img src={image1} alt={recipe.title} className="w-full h-40 object-cover mb-4 rounded-md" />
              <h2 className="text-lg font-semibold mb-2">{recipe.title}</h2>
              <p className="text-sm text-gray-600 mb-2">{recipe.briefContent}</p>
              <div className="flex items-center space-x-4 mb-2">
                <button className="text-blue-500 hover:text-blue-600" onClick={handleLikeClick}>
                  <FaRegThumbsUp /> Like
                </button>
                <button className="text-black hover:text-gray-600" onClick={handleShareClick}>
                  <FaShareAlt /> Share
                </button>
                <button className="text-black hover:text-gray-600">
                  <FaComment /> Comment
                </button>
              </div>
              <div className="flex justify-between text-gray-500 text-sm">
                <p>{recipe.readTime} read</p>
                <p>{recipe.mealType} - {recipe.dietaryType}</p>
              </div>
              <div className="flex justify-between text-gray-500 text-sm">
                <p>Preparation: {recipe.preparationTime}</p>
                <p>Cooking: {recipe.cookingTime}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  const renderVideos = () => {
    // Dummy data for wellness videos
    const wellnessVideos = [
      { id: 1, title: 'Video 1', description: 'Fitness is a state of physical well-being that allows individuals to perform daily activities with vigor and without undue fatigue. It encompasses various components, including cardiovascular endurance, muscular strength, flexibility, and body composition. Engaging in regular physical activity is essential for achieving and maintaining fitness.Wellness is a holistic approach to health that encompasses physical, mental, emotional, and social well-being. It goes beyond the absence of illness and emphasizes the proactive pursuit of activities, choices, and lifestyles that lead to a state of optimal health and well-being.Fitness activities can range from structured exercise programs, such as gym workouts or sports, to everyday activities like walking or gardening. The benefits of regular exercise and fitness include improved cardiovascular health, increased muscle tone and strength, better flexibility and balance, and enhanced mental well-being.Key dimensions of wellness include physical wellness (maintaining a healthy body through proper nutrition, exercise, and healthcare), emotional wellness (managing stress, developing resilience, and fostering positive self-esteem), mental wellness (engaging in activities that stimulate the mind and promote mental clarity), and social wellness (building supportive relationships and contributing to the community).Achieving wellness involves making conscious choices that support overall health and well-being. This can include practicing self-care, seeking regular medical check-ups, engaging in activities that promote relaxation and stress relief, and fostering positive relationships with others.', 
      videoUrl: 'https://www.youtube.com/embed/c0VxUFHdYzs?si=3uE5_b4h49s0DCHM', duration: '10:30', views: 100 },
      { id: 2, title: 'Video 2', description: 'Fitness is a state of physical well-being that allows individuals to perform daily activities with vigor and without undue fatigue. It encompasses various components, including cardiovascular endurance, muscular strength, flexibility, and body composition. Engaging in regular physical activity is essential for achieving and maintaining fitness.Wellness is a holistic approach to health that encompasses physical, mental, emotional, and social well-being. It goes beyond the absence of illness and emphasizes the proactive pursuit of activities, choices, and lifestyles that lead to a state of optimal health and well-being.Fitness activities can range from structured exercise programs, such as gym workouts or sports, to everyday activities like walking or gardening. The benefits of regular exercise and fitness include improved cardiovascular health, increased muscle tone and strength, better flexibility and balance, and enhanced mental well-being.Key dimensions of wellness include physical wellness (maintaining a healthy body through proper nutrition, exercise, and healthcare), emotional wellness (managing stress, developing resilience, and fostering positive self-esteem), mental wellness (engaging in activities that stimulate the mind and promote mental clarity), and social wellness (building supportive relationships and contributing to the community).Achieving wellness involves making conscious choices that support overall health and well-being. This can include practicing self-care, seeking regular medical check-ups, engaging in activities that promote relaxation and stress relief, and fostering positive relationships with others.',
       videoUrl: 'client/src/assets/video2.html', duration: '15:45', views: 150 },
      { id: 3, title: 'Video 3', description: 'Fitness is a state of physical well-being that allows individuals to perform daily activities with vigor and without undue fatigue. It encompasses various components, including cardiovascular endurance, muscular strength, flexibility, and body composition. Engaging in regular physical activity is essential for achieving and maintaining fitness.Wellness is a holistic approach to health that encompasses physical, mental, emotional, and social well-being. It goes beyond the absence of illness and emphasizes the proactive pursuit of activities, choices, and lifestyles that lead to a state of optimal health and well-being.Fitness activities can range from structured exercise programs, such as gym workouts or sports, to everyday activities like walking or gardening. The benefits of regular exercise and fitness include improved cardiovascular health, increased muscle tone and strength, better flexibility and balance, and enhanced mental well-being.Key dimensions of wellness include physical wellness (maintaining a healthy body through proper nutrition, exercise, and healthcare), emotional wellness (managing stress, developing resilience, and fostering positive self-esteem), mental wellness (engaging in activities that stimulate the mind and promote mental clarity), and social wellness (building supportive relationships and contributing to the community).Achieving wellness involves making conscious choices that support overall health and well-being. This can include practicing self-care, seeking regular medical check-ups, engaging in activities that promote relaxation and stress relief, and fostering positive relationships with others.', 
      videoUrl: 'client/src/assets/video3.html', duration: '12:20', views: 120 },
    ];

    return (
      <div>
        
        <h2 className="text-xl font-semibold mb-4">Wellness Videos</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {wellnessVideos.map(video => (
            <div key={video.id} className="bg-indigo-100 rounded-lg shadow-md p-4">
              {/* <video controls className="w-full h-40 object-cover mb-4 rounded-md">
                <source src={video.videoUrl} type="video/mp4" />
                Your browser does not support the video tag.
              </video> */}
              <h2 className="text-lg font-semibold mb-2">{video.title}</h2>
              <iframe width="400" height="200" src="https://www.youtube.com/embed/0zhvUV1bAVQ?si=Tg_5y5V6P-WKhJup" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin"></iframe>
              <p className="text-sm text-black m-4 mb-2">{video.description}</p>
              <div className="flex justify-between text-gray-500 text-sm">
                <p>{video.duration}</p>
                <p>{video.views} views</p>
              </div>
              <div className="flex items-center space-x-4 mt-2">
                <button className="text-blue-500 hover:text-blue-600" onClick={handleLikeClick}>
                  <FaRegThumbsUp /> Like
                </button>
                <button className="text-black hover:text-gray-600" onClick={handleShareClick}>
                  <FaShareAlt /> Share
                </button>
                <button className="text-black hover:text-gray-600">
                  <FaComment /> Comment
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div style={{ backgroundImage: `url(${slide3})`, backgroundSize: 'cover', minHeight: '100vh' }}>
      <div className="grid grid-cols-3 gap-4 mb-4">
        
        <button className="bg-blue-500 text-white py-2 px-4 rounded-md m-2" onClick={() => handleOptionClick('articles')}>
          Expert Articles 
         
        </button>
        <button className="bg-green-500 text-white py-2 px-4 rounded-md m-2" onClick={() => handleOptionClick('recipes')}>
          Healthy Recipes
        </button>
        <button className="bg-yellow-500 text-white py-2 px-4 rounded-md m-2" onClick={() => handleOptionClick('videos')}>
          Wellness Videos
        </button>
      </div>

      {renderContent()}
    </div>
  );
};

export default HealthyLiving;
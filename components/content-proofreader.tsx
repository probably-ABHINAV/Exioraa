
export const proofreadContent = {
  // Common typos and their corrections
  typos: {
    'thw': 'the',
    'teh': 'the',
    'adn': 'and',
    'nad': 'and',
    'recieve': 'receive',
    'seperate': 'separate',
    'occured': 'occurred',
    'neccessary': 'necessary',
    'accomodate': 'accommodate',
    'definately': 'definitely',
    'managment': 'management',
    'developement': 'development',
    'enviroment': 'environment',
    'recomend': 'recommend',
    'acheive': 'achieve',
    'sucessful': 'successful',
    'buisness': 'business',
    'professionnal': 'professional',
    'experiance': 'experience',
    'sevices': 'services',
    'custmer': 'customer',
    'custmer': 'customer',
    'compnay': 'company',
    'inovation': 'innovation',
    'trasform': 'transform'
  },

  // Grammar improvements
  grammar: {
    'We helps': 'We help',
    'We creates': 'We create',
    'We develops': 'We develop',
    'We designs': 'We design',
    'This allow': 'This allows',
    'This help': 'This helps',
    'which helps to': 'which help',
    'a unique': 'a unique',
    'an unique': 'a unique'
  },

  // Content consistency checks
  brandTerms: {
    'exioraa': 'Exioraa',
    'EXIORAA': 'Exioraa',
    'ui/ux': 'UI/UX',
    'uiux': 'UI/UX',
    'web development': 'Web Development',
    'app development': 'App Development',
    'seo': 'SEO',
    'api': 'API',
    'cms': 'CMS',
    'crm': 'CRM'
  }
};

export function checkContent(text: string): string {
  let correctedText = text;
  
  // Fix typos
  Object.entries(proofreadContent.typos).forEach(([typo, correction]) => {
    const regex = new RegExp(`\\b${typo}\\b`, 'gi');
    correctedText = correctedText.replace(regex, correction);
  });
  
  // Fix grammar
  Object.entries(proofreadContent.grammar).forEach(([error, correction]) => {
    const regex = new RegExp(error, 'gi');
    correctedText = correctedText.replace(regex, correction);
  });
  
  // Fix brand terms
  Object.entries(proofreadContent.brandTerms).forEach(([incorrect, correct]) => {
    const regex = new RegExp(`\\b${incorrect}\\b`, 'gi');
    correctedText = correctedText.replace(regex, correct);
  });
  
  return correctedText;
}

export function ContentProofreader() {
  return (
    <section className="py-20 px-4 sm:px-6 bg-gray-900/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            Content <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">Proofreader</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto">
            Advanced content proofreading tool to catch typos, grammar errors, and ensure brand consistency.
          </p>
        </div>
        
        <div className="bg-gray-800/50 rounded-lg p-6 border border-gray-700">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-white">Common Typos</h3>
              <div className="text-sm text-gray-300 space-y-1">
                {Object.entries(proofreadContent.typos).slice(0, 5).map(([typo, correction]) => (
                  <div key={typo} className="flex justify-between">
                    <span className="text-red-400">{typo}</span>
                    <span className="text-green-400">{correction}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-white">Grammar Fixes</h3>
              <div className="text-sm text-gray-300 space-y-1">
                {Object.entries(proofreadContent.grammar).slice(0, 5).map(([error, correction]) => (
                  <div key={error} className="flex justify-between">
                    <span className="text-red-400 truncate">{error}</span>
                    <span className="text-green-400">{correction}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-white">Brand Terms</h3>
              <div className="text-sm text-gray-300 space-y-1">
                {Object.entries(proofreadContent.brandTerms).slice(0, 5).map(([incorrect, correct]) => (
                  <div key={incorrect} className="flex justify-between">
                    <span className="text-red-400">{incorrect}</span>
                    <span className="text-green-400">{correct}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default proofreadContent;

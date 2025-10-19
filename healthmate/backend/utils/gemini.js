const { GoogleGenerativeAI } = require('@google/generative-ai');

// Initialize Gemini AI
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

// Function to analyze medical report
const analyzeMedicalReport = async (fileUrl, fileType, reportType) => {
  try {
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    const prompt = `
    You are a medical AI assistant. Analyze this medical report and provide a comprehensive analysis in both English and Roman Urdu.

    Report Type: ${reportType}
    File Type: ${fileType}
    File URL: ${fileUrl}

    Please provide the following in your response:

    1. **Summary** (in both English and Roman Urdu):
       - Brief overview of the report
       - Key findings
       - Overall health status

    2. **Abnormal Values** (if any):
       - Parameter name
       - Current value
       - Normal range
       - Severity level (normal/low/high/critical)

    3. **Doctor Questions** (5-7 questions):
       - Questions a patient should ask their doctor
       - Based on the findings

    4. **Diet Suggestions** (5-7 suggestions):
       - Dietary recommendations
       - Foods to include/avoid

    5. **Home Remedies** (3-5 remedies):
       - Safe home care tips
       - Lifestyle modifications

    6. **Confidence Score** (0-100):
       - How confident you are in this analysis

    Format your response as JSON with the following structure:
    {
      "summary": {
        "english": "English summary here",
        "urdu": "Roman Urdu summary here"
      },
      "abnormalValues": [
        {
          "parameter": "Parameter name",
          "value": "Current value",
          "normalRange": "Normal range",
          "severity": "severity_level"
        }
      ],
      "doctorQuestions": ["Question 1", "Question 2", ...],
      "dietSuggestions": ["Suggestion 1", "Suggestion 2", ...],
      "homeRemedies": ["Remedy 1", "Remedy 2", ...],
      "confidence": 85
    }

    Important Notes:
    - Always include a disclaimer that this is for educational purposes only
    - Do not provide specific medical diagnoses
    - Encourage consulting with healthcare professionals
    - Use simple, understandable language
    - For Roman Urdu, use English script with Urdu words
    `;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();

    // Try to parse JSON response
    try {
      const analysis = JSON.parse(text);
      return {
        success: true,
        analysis: analysis
      };
    } catch (parseError) {
      // If JSON parsing fails, return the raw text
      return {
        success: true,
        analysis: {
          summary: {
            english: text.substring(0, 500),
            urdu: "AI analysis completed. Please consult your doctor for detailed interpretation."
          },
          abnormalValues: [],
          doctorQuestions: ["Please consult your doctor for specific questions about this report."],
          dietSuggestions: ["Maintain a balanced diet and consult your doctor for specific dietary recommendations."],
          homeRemedies: ["Follow your doctor's advice and maintain a healthy lifestyle."],
          confidence: 70
        }
      };
    }
  } catch (error) {
    console.error('Gemini AI Error:', error);
    return {
      success: false,
      error: error.message
    };
  }
};

// Function to generate health tips
const generateHealthTips = async (userLanguage = 'en') => {
  try {
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    const prompt = `
    Generate 5 friendly health tips for today. 
    Language: ${userLanguage === 'ur' ? 'Roman Urdu' : 'English'}
    
    Make them:
    - Practical and actionable
    - Encouraging and positive
    - General wellness focused
    - Easy to understand
    
    Format as JSON array: ["tip1", "tip2", "tip3", "tip4", "tip5"]
    `;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();

    try {
      const tips = JSON.parse(text);
      return {
        success: true,
        tips: tips
      };
    } catch (parseError) {
      return {
        success: true,
        tips: userLanguage === 'ur' 
          ? [
              "Rozana 8 glass pani piyein",
              "30 minutes walk karein",
              "Fresh fruits aur vegetables khayein",
              "7-8 hours ki neend lein",
              "Stress se bachne ke liye meditation karein"
            ]
          : [
              "Drink 8 glasses of water daily",
              "Take a 30-minute walk",
              "Eat fresh fruits and vegetables",
              "Get 7-8 hours of sleep",
              "Practice meditation to reduce stress"
            ]
      };
    }
  } catch (error) {
    console.error('Health Tips Generation Error:', error);
    return {
      success: false,
      error: error.message
    };
  }
};

// Function to generate friendly messages
const generateFriendlyMessage = async (userLanguage = 'en', userName = 'User') => {
  try {
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    const prompt = `
    Generate a friendly, encouraging message for a health app user named ${userName}.
    Language: ${userLanguage === 'ur' ? 'Roman Urdu' : 'English'}
    
    Make it:
    - Warm and personal
    - Health-focused
    - Motivational
    - Short (1-2 sentences)
    
    Just return the message text, no JSON formatting.
    `;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text().trim();

    return {
      success: true,
      message: text
    };
  } catch (error) {
    console.error('Friendly Message Generation Error:', error);
    return {
      success: true,
      message: userLanguage === 'ur' 
        ? `Assalam-o-Alaikum ${userName}! Aaj apna khayal rakhiye aur healthy rahiye! 🌟`
        : `Hello ${userName}! Take care of yourself today and stay healthy! 🌟`
    };
  }
};

module.exports = {
  analyzeMedicalReport,
  generateHealthTips,
  generateFriendlyMessage
};

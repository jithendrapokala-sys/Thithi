import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";

const app = express();
const PORT = 3000;

app.use(express.json());

// Lazy-initialized Gemini AI client
function getGeminiAI() {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey || apiKey === "MY_GEMINI_API_KEY") {
    return null;
  }
  return new GoogleGenAI({ apiKey });
}

// Health check endpoint
app.get("/api/health", (_req, res) => {
  res.json({ status: "ok", service: "thithi.in astro-business API" });
});

// Consultation Lead Capture endpoint
app.post("/api/consultation", (req, res) => {
  const { fullName, businessName, email, phone, businessType, primaryChallenge } = req.body;
  if (!fullName || !email || !phone) {
    return res.status(400).json({ error: "Name, Email, and Phone are required." });
  }

  // Generate a lead reference number
  const leadId = "THI-" + Math.floor(100000 + Math.random() * 900000);
  console.log(`[Lead Captured] ${leadId} - ${fullName} (${businessName}) - ${email}`);

  return res.json({
    success: true,
    leadId,
    message: `Thank you, ${fullName}! Your Executive Astro-Business Consultation request (${leadId}) has been logged. Our senior astro-consultant will contact you within 24 hours.`,
    submittedData: { fullName, businessName, businessType, primaryChallenge }
  });
});

// AI Business Astro-Audit & Diagnostic Endpoint using Gemini API
app.post("/api/astro-audit", async (req, res) => {
  try {
    const {
      companyName,
      industry,
      founderZodiac,
      dob,
      tob,
      pob,
      officeDirection,
      primaryFocus,
      employeeCount
    } = req.body;

    const ai = getGeminiAI();

    if (!ai) {
      // Fallback response if GEMINI_API_KEY is missing or default placeholder
      return res.json({
        success: true,
        isFallback: true,
        auditReport: {
          summary: `Executive Business Astro Alignment Report for ${companyName || 'Your Business'} (${founderZodiac || 'Aries'})`,
          cashFlowAnalysis: `Based on BNN (Bhrigu Nandi Nadi) planetary transits, cash flow cycles require strengthening the 2nd & 11th House energies. Align financial decisions during auspicious hora windows.`,
          scalePotential: `KP System Sub-Lord indicators show strong expansion potential in Q3/Q4. Favorable Dasha period detected for scaling product lines.`,
          retentionAndTeam: `Employee turnover can be mitigated by positioning key HOD workstations according to Astro-Vastu alignment (North-West for HR/Sales & South-West for Leadership).`,
          astroVastuRecommendations: `Office facing ${officeDirection || 'North-East'}: Place CMD desk facing North or East. Ensure South-East (Agni zone) handles electrical/server equipment to prevent unexpected cash drainage.`,
          redbookRemedies: [
            "Keep a clear glass of water with gold coin/ring near CMD desk on Thursdays.",
            "Establish North-East corner cleanliness for high top-line clarity.",
            "Distribute yellow sweets to team members on auspicious Jupiter transits."
          ]
        }
      });
    }

    const prompt = `You are an elite B2B Astro-Business Consultant for thithi.in, specializing in Vedic Astrology, KP System (Krishnamurti Paddhati), BNN (Bhrigu Nandi Nadi), Redbook (Lal Kitab), and Astro-Vastu.

Generate a highly strategic, professional executive business audit report based on the following client details:
- Company Name: ${companyName || 'Enterprise Client'}
- Industry: ${industry || 'Corporate / Technology / Services'}
- Founder Zodiac/Sun Sign: ${founderZodiac || 'Aries'}
- Founder DOB/TOB/POB: ${dob || 'N/A'}, ${tob || 'N/A'}, ${pob || 'N/A'}
- Office Facing Direction: ${officeDirection || 'East'}
- Primary Business Challenge/Focus: ${primaryFocus || 'Cash Flow & Scale'}
- Company Size: ${employeeCount || '10-50 employees'}

Format your answer as valid JSON with these keys:
{
  "summary": "High-level 2-sentence executive summary combining cosmic cycles with business strategy.",
  "cashFlowAnalysis": "Actionable insight on cash flow optimization, working capital cycles & debt reduction using Vedic & BNN analysis.",
  "scalePotential": "Strategic recommendation on top-line growth, market expansion & timing using KP System sub-lords.",
  "retentionAndTeam": "Guidance on leadership harmony, employee retention & key hiring alignment using planetary compatibility.",
  "astroVastuRecommendations": "Specific spatial & directional adjustments for CMD desk, finance department, and entrance based on Astro-Vastu.",
  "redbookRemedies": [
    "Practical remedy 1 for immediate cash flow clearance",
    "Practical remedy 2 for conflict-free team alignment",
    "Practical remedy 3 for brand elevation & customer attraction"
  ]
}

Ensure the output is strictly valid JSON without markdown formatting backticks if possible, or plain JSON. Keep the tone professional, authoritative, encouraging, and business-focused.`;

    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: prompt,
      config: {
        responseMimeType: "application/json"
      }
    });

    const responseText = response.text || "{}";
    let auditReport;
    try {
      auditReport = JSON.parse(responseText);
    } catch {
      auditReport = {
        summary: `Executive Business Alignment for ${companyName}`,
        cashFlowAnalysis: responseText.slice(0, 300),
        scalePotential: "KP System sub-lords signal high potential for strategic scaling.",
        retentionAndTeam: "Align HR placement to West/North-West zone for optimal employee satisfaction.",
        astroVastuRecommendations: "Keep CMD desk facing North-East to maximize clarity and leadership power.",
        redbookRemedies: ["Place a copper brass element in North-East", "Conduct quarterly team harmony rituals"]
      };
    }

    return res.json({
      success: true,
      isFallback: false,
      auditReport
    });
  } catch (error: any) {
    console.error("Error generating astro-audit:", error);
    return res.status(500).json({
      error: "Failed to generate business audit.",
      details: error.message
    });
  }
});

async function startServer() {
  // Vite middleware setup for development vs production static serve
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (_req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`[thithi.in] Express + Vite server running on http://0.0.0.0:${PORT}`);
  });
}

startServer();

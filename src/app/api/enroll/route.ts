import { NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const {
      fullName,
      email,
      phone,
      role,
      company,
      cityCountry,
      registrationType,
      message,
    } = body;

    // Validation des champs obligatoires
    if (!fullName || !email) {
      return NextResponse.json(
        { error: "Le nom complet et l'email sont obligatoires." },
        { status: 400 }
      );
    }

    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      console.error("RESEND_API_KEY is not defined in environment variables.");
      return NextResponse.json(
        {
          error:
            "Le service d'envoi d'e-mails n'est pas encore configuré (clé API manquante).",
        },
        { status: 500 }
      );
    }

    const resend = new Resend(apiKey);
    const fromAddress =
      process.env.RESEND_FROM_EMAIL || "YASEE IT <onboarding@resend.dev>";
    const notificationRecipient =
      process.env.NOTIFICATION_EMAIL || "info@yasee-it.ci";

    // Formatage de la date en heure locale
    const submissionDate = new Date().toLocaleDateString("fr-FR", {
      day: "2-digit",
      month: "long",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });

    // Nettoyage du numéro de téléphone pour lien WhatsApp direct
    const cleanPhone = (phone || "").replace(/[^0-9]/g, "");
    const whatsappUrl = cleanPhone
      ? `https://wa.me/${cleanPhone}?text=Bonjour%20${encodeURIComponent(
          fullName
        )}%2C%20je%20fais%20suite%20%C3%A0%20votre%20demande%20d%27inscription%20PECB%20ISO%2027001%20chez%20YASEE%20IT.`
      : null;

    // ─────────────────────────────────────────────────────────────────────────────
    // 1. GABARIT EMAIL ÉQUIPE YASEE IT (Fiche d'inscription exécutive)
    // ─────────────────────────────────────────────────────────────────────────────
    const adminSubject = `🚨 [INSCRIPTION] ${fullName} — PECB ISO 27001 Lead Implementer`;
    const adminHtml = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Nouvelle Inscription YASEE IT</title>
      </head>
      <body style="margin: 0; padding: 20px; background-color: #f1f5f9; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; color: #080A16; -webkit-font-smoothing: antialiased;">
        <table align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 640px; background-color: #ffffff; border-radius: 16px; overflow: hidden; box-shadow: 0 10px 30px rgba(0,0,0,0.06); border: 1px solid #e2e8f0;">
          
          <!-- BANDEAU HAUT INSTITUTIONNEL -->
          <tr>
            <td style="background-color: #080A16; padding: 32px 28px; border-bottom: 3px solid #1900CE;">
              <table width="100%" border="0" cellpadding="0" cellspacing="0">
                <tr>
                  <td>
                    <div style="display: inline-block; padding: 4px 10px; background-color: rgba(25, 0, 206, 0.3); border: 1px solid rgba(25, 0, 206, 0.6); border-radius: 6px; font-size: 11px; font-weight: 700; color: #93c5fd; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 12px;">
                      ⚡ NOUVEAU PROSPECT IDENTIFIÉ
                    </div>
                    <h1 style="margin: 0; font-size: 22px; font-weight: 800; color: #ffffff; letter-spacing: -0.5px; line-height: 1.3;">
                      Demande d'inscription reçue
                    </h1>
                    <p style="margin: 6px 0 0 0; font-size: 13px; color: #94a3b8;">
                      Session : <strong>PECB ISO/IEC 27001 Lead Implementer (14 — 18 Décembre 2026)</strong>
                    </p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- CONTENU PRINCIPAL -->
          <tr>
            <td style="padding: 28px;">
              
              <!-- BADGE RÉCAPITULATIF DATE -->
              <table width="100%" border="0" cellpadding="0" cellspacing="0" style="background-color: #f8fafc; border-radius: 10px; border: 1px solid #e2e8f0; margin-bottom: 24px;">
                <tr>
                  <td style="padding: 12px 16px; font-size: 12px; color: #64748b;">
                    🕒 Date de soumission : <strong style="color: #080A16;">${submissionDate}</strong>
                  </td>
                  <td align="right" style="padding: 12px 16px; font-size: 12px;">
                    <span style="display: inline-block; padding: 3px 8px; border-radius: 99px; background-color: #dcfce7; color: #166534; font-weight: 700; font-size: 11px;">
                      Statut : À traiter sous 24h
                    </span>
                  </td>
                </tr>
              </table>

              <!-- SECTION COORDONNÉES CANDIDAT -->
              <h2 style="font-size: 14px; font-weight: 800; text-transform: uppercase; letter-spacing: 0.5px; color: #1900CE; margin: 0 0 12px 0;">
                1. Fiche d'identification du candidat
              </h2>

              <table width="100%" border="0" cellpadding="0" cellspacing="0" style="border-collapse: collapse; margin-bottom: 24px;">
                <tr style="border-bottom: 1px solid #f1f5f9;">
                  <td style="padding: 10px 0; font-size: 13px; color: #64748b; font-weight: 600; width: 38%;">Nom et prénom :</td>
                  <td style="padding: 10px 0; font-size: 14px; color: #080A16; font-weight: 700;">${fullName}</td>
                </tr>
                <tr style="border-bottom: 1px solid #f1f5f9;">
                  <td style="padding: 10px 0; font-size: 13px; color: #64748b; font-weight: 600;">Email professionnel :</td>
                  <td style="padding: 10px 0; font-size: 14px; font-weight: 600;">
                    <a href="mailto:${email}" style="color: #1900CE; text-decoration: none;">${email}</a>
                  </td>
                </tr>
                <tr style="border-bottom: 1px solid #f1f5f9;">
                  <td style="padding: 10px 0; font-size: 13px; color: #64748b; font-weight: 600;">Téléphone :</td>
                  <td style="padding: 10px 0; font-size: 14px; color: #080A16; font-weight: 600;">
                    ${
                      phone
                        ? `<a href="tel:${phone}" style="color: #080A16; text-decoration: none;">${phone}</a>`
                        : `<span style="color: #94a3b8; font-style: italic;">Non renseigné</span>`
                    }
                  </td>
                </tr>
                <tr style="border-bottom: 1px solid #f1f5f9;">
                  <td style="padding: 10px 0; font-size: 13px; color: #64748b; font-weight: 600;">Poste / Rôle actuel :</td>
                  <td style="padding: 10px 0; font-size: 14px; color: #080A16;">${role || "Non renseigné"}</td>
                </tr>
                <tr style="border-bottom: 1px solid #f1f5f9;">
                  <td style="padding: 10px 0; font-size: 13px; color: #64748b; font-weight: 600;">Organisation / Entreprise :</td>
                  <td style="padding: 10px 0; font-size: 14px; color: #080A16; font-weight: 600;">${company || "Non renseigné"}</td>
                </tr>
                <tr style="border-bottom: 1px solid #f1f5f9;">
                  <td style="padding: 10px 0; font-size: 13px; color: #64748b; font-weight: 600;">Localisation (Ville / Pays) :</td>
                  <td style="padding: 10px 0; font-size: 14px; color: #080A16;">${cityCountry || "Non renseigné"}</td>
                </tr>
                <tr>
                  <td style="padding: 10px 0; font-size: 13px; color: #64748b; font-weight: 600;">Type de prise en charge :</td>
                  <td style="padding: 10px 0; font-size: 14px; color: #080A16; font-weight: 700;">
                    <span style="background-color: #eff6ff; color: #1d4ed8; padding: 4px 10px; border-radius: 6px; font-size: 12px;">
                      ${registrationType || "Participant individuel"}
                    </span>
                  </td>
                </tr>
              </table>

              ${
                message
                  ? `
                <!-- MESSAGE DU CANDIDAT -->
                <div style="margin-bottom: 24px; padding: 16px 20px; background-color: #faf5ff; border: 1px solid #e9d5ff; border-radius: 12px;">
                  <div style="font-size: 12px; font-weight: 700; color: #7e22ce; text-transform: uppercase; margin-bottom: 6px;">
                    💬 Message & Attentes exprimées :
                  </div>
                  <div style="font-size: 14px; color: #3b0764; line-height: 1.5; white-space: pre-wrap;">${message}</div>
                </div>
              `
                  : ""
              }

              <!-- BOUTONS D'ACTION IMMÉDIATE -->
              <table width="100%" border="0" cellpadding="0" cellspacing="0" style="margin-top: 24px; margin-bottom: 16px;">
                <tr>
                  <td style="padding-right: 8px;" width="50%">
                    <a href="mailto:${email}?subject=Suite%20%C3%A0%20votre%20inscription%20YASEE%20IT%20-%20Formation%20PECB%20ISO%2027001" style="display: block; text-align: center; background-color: #1900CE; color: #ffffff; padding: 12px 16px; border-radius: 10px; font-size: 13px; font-weight: 700; text-decoration: none;">
                      ✉️ Répondre par Email
                    </a>
                  </td>
                  ${
                    whatsappUrl
                      ? `
                    <td style="padding-left: 8px;" width="50%">
                      <a href="${whatsappUrl}" target="_blank" style="display: block; text-align: center; background-color: #16a34a; color: #ffffff; padding: 12px 16px; border-radius: 10px; font-size: 13px; font-weight: 700; text-decoration: none;">
                        💬 Relancer via WhatsApp
                      </a>
                    </td>
                  `
                      : ""
                  }
                </tr>
              </table>

            </td>
          </tr>

          <!-- PIED DE PAGE INTERNE -->
          <tr>
            <td style="background-color: #f8fafc; padding: 16px 28px; border-top: 1px solid #e2e8f0; text-align: center;">
              <p style="margin: 0; font-size: 11px; color: #94a3b8;">
                Notification automatique générée par le portail web <strong>YASEE IT</strong> • Abidjan, Côte d'Ivoire.
              </p>
            </td>
          </tr>

        </table>
      </body>
      </html>
    `;

    // ─────────────────────────────────────────────────────────────────────────────
    // 2. GABARIT EMAIL CANDIDAT (Accusé de réception & confirmation de démarche)
    // ─────────────────────────────────────────────────────────────────────────────
    const candidateSubject = `Confirmation de votre demande d'inscription — PECB ISO 27001 | YASEE IT`;
    const candidateHtml = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Confirmation d'inscription YASEE IT</title>
      </head>
      <body style="margin: 0; padding: 20px; background-color: #f1f5f9; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; color: #080A16; -webkit-font-smoothing: antialiased;">
        <table align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px; background-color: #ffffff; border-radius: 16px; overflow: hidden; box-shadow: 0 10px 30px rgba(0,0,0,0.06); border: 1px solid #e2e8f0;">
          
          <!-- BANDEAU HAUT BRANDÉ -->
          <tr>
            <td style="background-color: #080A16; padding: 32px 28px; text-align: center;">
              <div style="font-size: 20px; font-weight: 900; color: #ffffff; letter-spacing: 2px;">
                YASEE<span style="color: #1900CE;">.IT</span>
              </div>
              <div style="margin-top: 12px; font-size: 13px; color: #94a3b8; letter-spacing: 0.5px;">
                Excellence en Cybersécurité & Gouvernance des Risques (GRC)
              </div>
            </td>
          </tr>

          <!-- CORPS DU MESSAGE -->
          <tr>
            <td style="padding: 32px 28px;">
              <h1 style="margin: 0 0 16px 0; font-size: 20px; font-weight: 800; color: #080A16;">
                Bonjour ${fullName},
              </h1>

              <p style="margin: 0 0 18px 0; font-size: 14px; line-height: 1.6; color: #334155;">
                Nous avons bien enregistré votre demande d'inscription pour la prochaine session certifiante officielle :
              </p>

              <!-- CARTOUCHE DE FORMATION -->
              <table width="100%" border="0" cellpadding="0" cellspacing="0" style="background-color: #f8fafc; border: 1px solid #e2e8f0; border-left: 4px solid #1900CE; border-radius: 8px; margin-bottom: 24px;">
                <tr>
                  <td style="padding: 16px;">
                    <div style="font-size: 11px; font-weight: 700; text-transform: uppercase; color: #1900CE; letter-spacing: 1px; margin-bottom: 4px;">
                      Formation Certifiante Officielle
                    </div>
                    <div style="font-size: 16px; font-weight: 800; color: #080A16; margin-bottom: 8px;">
                      PECB Certified ISO/IEC 27001 Lead Implementer
                    </div>
                    <div style="font-size: 13px; color: #475569; line-height: 1.5;">
                      📅 <strong>Dates :</strong> 14 au 18 Décembre 2026<br>
                      💻 <strong>Format :</strong> 100 % en ligne avec échanges interactifs directs<br>
                      🎓 <strong>Examen :</strong> Certification officielle PECB incluse (mode Open Book)<br>
                      📋 <strong>Prise en charge :</strong> ${registrationType || "Participant individuel"}
                    </div>
                  </td>
                </tr>
              </table>

              <!-- PROCHAINES ÉTAPES -->
              <h2 style="font-size: 14px; font-weight: 800; text-transform: uppercase; color: #080A16; margin: 0 0 12px 0;">
                Prochaines étapes de votre admission :
              </h2>

              <table width="100%" border="0" cellpadding="0" cellspacing="0" style="margin-bottom: 24px; font-size: 13px; color: #334155; line-height: 1.6;">
                <tr>
                  <td style="padding-bottom: 10px;" valign="top" width="24">
                    <span style="display: inline-block; width: 18px; height: 18px; line-height: 18px; text-align: center; border-radius: 50%; background-color: #1900CE; color: #ffffff; font-size: 11px; font-weight: 700;">1</span>
                  </td>
                  <td style="padding-bottom: 10px; padding-left: 8px;">
                    <strong>Vérification de votre dossier :</strong> Notre équipe administrative valide les prérequis de votre profil sous 24h ouvrées.
                  </td>
                </tr>
                <tr>
                  <td style="padding-bottom: 10px;" valign="top" width="24">
                    <span style="display: inline-block; width: 18px; height: 18px; line-height: 18px; text-align: center; border-radius: 50%; background-color: #1900CE; color: #ffffff; font-size: 11px; font-weight: 700;">2</span>
                  </td>
                  <td style="padding-bottom: 10px; padding-left: 8px;">
                    <strong>Convention & Modalités :</strong> Nous vous émettons votre convention de formation et la facture proforma pour vous ou votre employeur.
                  </td>
                </tr>
                <tr>
                  <td valign="top" width="24">
                    <span style="display: inline-block; width: 18px; height: 18px; line-height: 18px; text-align: center; border-radius: 50%; background-color: #1900CE; color: #ffffff; font-size: 11px; font-weight: 700;">3</span>
                  </td>
                  <td style="padding-left: 8px;">
                    <strong>Accès & Supports PECB :</strong> Dès la formalisation effectuée, vous recevez vos identifiants d'accès à la plateforme officielle PECB et les supports de cours.
                  </td>
                </tr>
              </table>

              <!-- BLOC CONTACT RAPIDE -->
              <div style="background-color: #eff6ff; border: 1px solid #bfdbfe; border-radius: 10px; padding: 16px; margin-bottom: 20px;">
                <div style="font-size: 13px; font-weight: 700; color: #1e40af; margin-bottom: 4px;">
                  Une question urgente ou besoin d'une convention immédiate ?
                </div>
                <div style="font-size: 13px; color: #1e3a8a; line-height: 1.5;">
                  📞 Téléphone / WhatsApp : <a href="https://wa.me/2250711444588" style="color: #1900CE; font-weight: 700; text-decoration: none;">+225 07 11 44 45 88</a><br>
                  ✉️ Email : <a href="mailto:info@yasee-it.ci" style="color: #1900CE; font-weight: 700; text-decoration: none;">info@yasee-it.ci</a>
                </div>
              </div>

              <p style="margin: 0; font-size: 13px; color: #64748b; line-height: 1.5;">
                À très bientôt,<br>
                <strong>L'Équipe Pédagogique YASEE IT</strong>
              </p>
            </td>
          </tr>

          <!-- FOOTER OFFICIEL -->
          <tr>
            <td style="background-color: #f8fafc; padding: 20px 28px; border-top: 1px solid #e2e8f0; text-align: center;">
              <p style="margin: 0 0 6px 0; font-size: 11px; color: #64748b; font-weight: 600;">
                YASEE IT — Centre de formation et d'expertise en Management de la Sécurité de l'Information (SMSI)
              </p>
              <p style="margin: 0; font-size: 11px; color: #94a3b8;">
                Abidjan, Côte d'Ivoire • <a href="mailto:info@yasee-it.ci" style="color: #64748b; text-decoration: none;">info@yasee-it.ci</a>
              </p>
            </td>
          </tr>

        </table>
      </body>
      </html>
    `;

    // ─────────────────────────────────────────────────────────────────────────────
    // 3. ENVOIS VIA LE SDK RESEND
    // ─────────────────────────────────────────────────────────────────────────────
    
    // Envoi 1 : Notification principale à l'équipe YASEE IT
    const { data: adminData, error: adminError } = await resend.emails.send({
      from: fromAddress,
      to: [notificationRecipient],
      replyTo: email,
      subject: adminSubject,
      html: adminHtml,
    });

    if (adminError) {
      console.error("Resend admin email error:", adminError);
      return NextResponse.json(
        { error: adminError.message || "Erreur lors de l'envoi de la notification." },
        { status: 500 }
      );
    }

    // Envoi 2 : Accusé de réception envoyé au candidat (tenté gracieusement)
    // En mode test (onboarding@resend.dev), Resend bloquera si l'email candidat != compte Resend.
    // En production avec domaine vérifié, il partira directement vers le candidat.
    try {
      await resend.emails.send({
        from: fromAddress,
        to: [email],
        subject: candidateSubject,
        html: candidateHtml,
      });
    } catch (candidateErr) {
      // On consigne l'erreur éventuelle sans bloquer l'inscription
      console.warn("L'envoi de l'accusé de réception au candidat n'a pas pu aboutir (limitation mode test ou domaine non vérifié):", candidateErr);
    }

    return NextResponse.json({ success: true, data: adminData }, { status: 200 });
  } catch (err: unknown) {
    console.error("Erreur inattendue de l'API /api/enroll:", err);
    return NextResponse.json(
      { error: "Une erreur réseau ou serveur inattendue est survenue." },
      { status: 500 }
    );
  }
}

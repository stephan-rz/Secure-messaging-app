interface VerificationEmailProps {
    confirmLink: string;
}

const VerificationEmail = ({ confirmLink }: VerificationEmailProps) => {
    
    return (
        `<style>
    * {
        box-sizing: border-box;
    }

    body {
        margin: 0;
        padding: 0;
    }

    a[x-apple-data-detectors] {
        color: inherit !important;
        text-decoration: inherit !important;
    }

    #MessageViewBody a {
        color: inherit;
        text-decoration: none;
    }

    p {
        line-height: inherit
    }

    .desktop_hide,
    .desktop_hide table {
        mso-hide: all;
        display: none;
        max-height: 0px;
        overflow: hidden;
    }

    .image_block img+div {
        display: none;
    }

    .menu_block.desktop_hide .menu-links span {
        mso-hide: all;
    }

    @media (max-width:700px) {

        .desktop_hide table.icons-inner,
        .social_block.desktop_hide .social-table {
            display: inline-block !important;
        }

        .icons-inner {
            text-align: center;
        }

        .icons-inner td {
            margin: 0 auto;
        }

        .image_block div.fullWidth {
            max-width: 100% !important;
        }

        .menu-checkbox[type=checkbox]~.menu-links {
            display: none !important;
            padding: 5px 0;
        }

        .menu-checkbox[type=checkbox]:checked~.menu-trigger .menu-open {
            display: none !important;
        }

        .menu-checkbox[type=checkbox]:checked~.menu-links,
        .menu-checkbox[type=checkbox]~.menu-trigger {
            display: block !important;
            max-width: none !important;
            max-height: none !important;
            font-size: inherit !important;
        }

        .menu-checkbox[type=checkbox]~.menu-links>a,
        .menu-checkbox[type=checkbox]~.menu-links>span.label {
            display: block !important;
            text-align: center;
        }

        .menu-checkbox[type=checkbox]:checked~.menu-trigger .menu-close {
            display: block !important;
        }

        .mobile_hide {
            display: none;
        }

        .row-content {
            width: 100% !important;
        }

        .stack .column {
            width: 100%;
            display: block;
        }

        .mobile_hide {
            min-height: 0;
            max-height: 0;
            max-width: 0;
            overflow: hidden;
            font-size: 0px;
        }

        .desktop_hide,
        .desktop_hide table {
            display: table !important;
            max-height: none !important;
        }
    }

    #memu-r7c0m2:checked~.menu-links {
        background-color: #000000 !important;
    }

    #memu-r7c0m2:checked~.menu-links a,
    #memu-r7c0m2:checked~.menu-links span {
        color: #ffffff !important;
    }
</style>
    <div style="background-color: #000000; margin: 0; padding: 0; -webkit-text-size-adjust: none; text-size-adjust: none;">
    <table border="0" cellpadding="0" cellspacing="0" class="nl-container" role="presentation"
        style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #000000;" width="100%">
        <tbody>
            <tr>
                <td>
                    <table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-1"
                        role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
                        <tbody>
                            <tr>
                                <td>
                                    <table align="center" border="0" cellpadding="0" cellspacing="0"
                                        class="row-content stack" role="presentation"
                                        style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; color: #000000; width: 680px; margin: 0 auto;"
                                        width="680">
                                        <tbody>
                                            <tr>
                                                <td class="column column-1"
                                                    style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-bottom: 5px; padding-top: 5px; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;"
                                                    width="100%">
                                                    <div class="spacer_block block-1"
                                                        style="height:30px;line-height:30px;font-size:1px;"> </div>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-2"
                        role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
                        <tbody>
                            <tr>
                                <td>
                                    <table align="center" border="0" cellpadding="0" cellspacing="0"
                                        class="row-content stack" role="presentation"
                                        style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; color: #000000; width: 680px; margin: 0 auto;"
                                        width="680">
                                        <tbody>
                                            <tr>
                                                <td class="column column-1"
                                                    style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-bottom: 5px; padding-top: 5px; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;"
                                                    width="33.333333333333336%">
                                                    <div class="spacer_block block-1"
                                                        style="height:0px;line-height:0px;font-size:1px;"> </div>
                                                </td>
                                                <td class="column column-2"
                                                    style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-bottom: 5px; padding-top: 5px; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;"
                                                    width="33.333333333333336%">
                                                    <table border="0" cellpadding="0" cellspacing="0"
                                                        class="image_block block-1" role="presentation"
                                                        style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;"
                                                        width="100%">
                                                        <tr>
                                                            <td class="pad"
                                                                style="width:100%;padding-right:0px;padding-left:0px;">
                                                                <div align="center" class="alignment"
                                                                    style="line-height:10px">
                                                                    <div style="display: flex;"><img
																			alt="Company Logo"
																			src="https://utfs.io/f/8af8ffa1-aca3-4f7d-bd72-186e281a646f-p9ncwr.png"
																			style="display: block; height: fit-content; border: 0; width: 120px; margin-right:20px;"
																			title="Company Logo" width="80" />
																			<h1 style="color:white; line-height: 1.2em; text-align: left; font-family:Arial, Helvetica, sans-serif;">WP Vulnerability Scanner</h1>
																	</div>
                                                                </div>
                                                            </td>
                                                        </tr>
                                                    </table>
                                                </td>
                                                <td class="column column-3"
                                                    style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-bottom: 5px; padding-top: 5px; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;"
                                                    width="33.333333333333336%">
                                                    <div class="spacer_block block-1"
                                                        style="height:0px;line-height:0px;font-size:1px;"> </div>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-3"
                        role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
                        <tbody>
                            <tr>
                                <td>
                                    <table align="center" border="0" cellpadding="0" cellspacing="0"
                                        class="row-content stack" role="presentation"
                                        style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; color: #000000; width: 680px; margin: 0 auto;"
                                        width="680">
                                        <tbody>
                                            <tr>
                                                <td class="column column-1"
                                                    style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-bottom: 5px; padding-top: 5px; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;"
                                                    width="100%">
                                                    <div class="spacer_block block-1"
                                                        style="height:10px;line-height:10px;font-size:1px;"> </div>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-4"
                        role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
                        <tbody>
                            <tr>
                                <td>
                                    <table align="center" border="0" cellpadding="0" cellspacing="0"
                                        class="row-content stack" role="presentation"
                                        style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #18181b; color: #000000; border-radius: 30px 30px 0 0; width: 680px; margin: 0 auto;"
                                        width="680">
                                        <tbody>
                                            <tr>
                                                <td class="column column-1"
                                                    style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-top: 5px; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;"
                                                    width="100%">
                                                    <div class="spacer_block block-1"
                                                        style="height:35px;line-height:35px;font-size:1px;"> </div>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-5"
                        role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
                        <tbody>
                            <tr>
                                <td>
                                    <table align="center" border="0" cellpadding="0" cellspacing="0"
                                        class="row-content stack" role="presentation"
                                        style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #18181b; color: #000000; width: 680px; margin: 0 auto;"
                                        width="680">
                                        <tbody>
                                            <tr>
                                                <td class="column column-1"
                                                    style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-bottom: 5px; padding-top: 5px; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;"
                                                    width="100%">
                                                    <table border="0" cellpadding="15" cellspacing="0"
                                                        class="image_block block-1" role="presentation"
                                                        style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;"
                                                        width="100%">
                                                        <tr>
                                                            <td class="pad">
                                                                <div align="center" class="alignment"
                                                                    style="line-height:10px">
                                                                    <div class="fullWidth" style="max-width: 374px;">
                                                                        <img alt="Verifing Email" height="auto"
                                                                            src="https://utfs.io/f/b39aebd8-eb5c-4d6f-9cce-638042d1f051-1ggvwv.png"
                                                                            style="display: block; height: auto; border: 0; width: 100%;"
                                                                            title="Verifing Email" width="374" />
                                                                    </div>
                                                                </div>
                                                            </td>
                                                        </tr>
                                                    </table>
                                                    <div class="spacer_block block-2"
                                                        style="height:35px;line-height:35px;font-size:1px;"> </div>
                                                    <table border="0" cellpadding="0" cellspacing="0"
                                                        class="heading_block block-3" role="presentation"
                                                        style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;"
                                                        width="100%">
                                                        <tr>
                                                            <td class="pad" style="text-align:center;width:100%;">
                                                                <h1
                                                                    style="margin: 0; color: #ffffff; direction: ltr; font-family: Arial, Helvetica Neue, Helvetica, sans-serif; font-size: 27px; font-weight: normal; letter-spacing: normal; line-height: 120%; text-align: center; margin-top: 0; margin-bottom: 0; mso-line-height-alt: 32.4px;">
                                                                    <strong>Verify Your Email Address
                                                                    </strong>
                                                                </h1>
                                                            </td>
                                                        </tr>
                                                    </table>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-6"
                        role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
                        <tbody>
                            <tr>
                                <td>
                                    <table align="center" border="0" cellpadding="0" cellspacing="0"
                                        class="row-content stack" role="presentation"
                                        style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #18181b; color: #000000; width: 680px; margin: 0 auto;"
                                        width="680">
                                        <tbody>
                                            <tr>
                                                <td class="column column-1"
                                                    style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-bottom: 5px; padding-top: 5px; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;"
                                                    width="16.666666666666668%">
                                                    <div class="spacer_block block-1"
                                                        style="height:0px;line-height:0px;font-size:1px;"> </div>
                                                </td>
                                                <td class="column column-2"
                                                    style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-bottom: 5px; padding-top: 5px; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;"
                                                    width="66.66666666666667%">
                                                    <table border="0" cellpadding="0" cellspacing="0"
                                                        class="paragraph_block block-1" role="presentation"
                                                        style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;"
                                                        width="100%">
                                                        <tr>
                                                            <td class="pad"
                                                                style="padding-bottom:10px;padding-left:20px;padding-right:10px;padding-top:10px;">
                                                                <div
                                                                    style="color:#cbcbcb;font-family:Arial, Helvetica Neue, Helvetica, sans-serif;font-size:14px;line-height:180%;text-align:center;mso-line-height-alt:25.2px;">
                                                                    <p style="margin: 0; word-break: break-word;">Click the link below to verify your email address</p>
                                                                </div>
                                                            </td>
                                                        </tr>
                                                    </table>
                                                    <div class="spacer_block block-2"
                                                        style="height:10px;line-height:10px;font-size:1px;"> </div>
                                                    <table border="0" cellpadding="10" cellspacing="0"
                                                        class="button_block block-3" role="presentation"
                                                        style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;"
                                                        width="100%">
                                                        <tr>
                                                            <td class="pad">
                                                                <div align="center" class="alignment"><!--[if mso]>
<v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" href="www.example.com" style="height:58px;width:189px;v-text-anchor:middle;" arcsize="28%" strokeweight="0.75pt" strokecolor="#101" fillcolor="#318df6">
<w:anchorlock/>
<v:textbox inset="0px,0px,0px,0px">
<center style="color:#ffffff; font-family:Arial, sans-serif; font-size:16px">
<![endif]--><a href="${confirmLink}" style="text-decoration:none;display:inline-block;color:#ffffff;background-color:#318df6;border-radius:15px;width:auto;border-top:1px solid #101;font-weight:700;border-right:1px solid #101;border-bottom:1px solid #101;border-left:1px solid #101;padding-top:10px;padding-bottom:10px;font-family:Arial, Helvetica Neue, Helvetica, sans-serif;font-size:16px;text-align:center;mso-border-alt:none;word-break:keep-all;"
                                                                        target="_blank"><span
                                                                            style="padding-left:30px;padding-right:30px;font-size:16px;display:inline-block;letter-spacing:normal;"><span
                                                                                style="word-break: break-word; line-height: 32px;">Confirm Your Email</span></span></a><!--[if mso]></center></v:textbox></v:roundrect><![endif]-->
                                                                </div>
                                                            </td>
                                                        </tr>
                                                    </table>
                                                    <div class="spacer_block block-4"
                                                        style="height:20px;line-height:20px;font-size:1px;"> </div>
                                                </td>
                                                <td class="column column-3"
                                                    style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-bottom: 5px; padding-top: 5px; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;"
                                                    width="16.666666666666668%">
                                                    <div class="spacer_block block-1"
                                                        style="height:0px;line-height:0px;font-size:1px;"> </div>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-7"
                        role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
                        <tbody>
                            <tr>
                                <td>
                                    <table align="center" border="0" cellpadding="0" cellspacing="0"
                                        class="row-content stack" role="presentation"
                                        style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #18181b; color: #000000; border-radius: 0 0 30px 30px; width: 680px; margin: 0 auto;"
                                        width="680">
                                        <tbody>
                                            <tr>
                                                <td class="column column-1"
                                                    style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;"
                                                    width="100%">
                                                    <div class="spacer_block block-1"
                                                        style="height:35px;line-height:35px;font-size:1px;"> </div>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-8"
                        role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
                        <tbody>
                            <tr>
                                <td>
                                    <table align="center" border="0" cellpadding="0" cellspacing="0"
                                        class="row-content stack" role="presentation"
                                        style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; color: #000000; width: 680px; margin: 0 auto;"
                                        width="680">
                                        <tbody>
                                            <tr>
                                                <td class="column column-1"
                                                    style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-bottom: 5px; padding-top: 5px; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;"
                                                    width="100%">
                                                    <div class="spacer_block block-1"
                                                        style="height:20px;line-height:20px;font-size:1px;"> </div>
                                                    <table border="0" cellpadding="0" cellspacing="0"
                                                        class="social_block block-2" role="presentation"
                                                        style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;"
                                                        width="100%">
                                                        <tr>
                                                            <td class="pad"
                                                                style="padding-bottom:15px;padding-left:10px;padding-right:10px;padding-top:10px;text-align:center;">
                                                                <div align="center" class="alignment">
                                                                    <table border="0" cellpadding="0" cellspacing="0"
                                                                        class="social-table" role="presentation"
                                                                        style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; display: inline-block;"
                                                                        width="144px">
                                                                        <tr>
                                                                        <td style="padding:0 2px 0 2px;"><a
                                                                        href="https://www.facebook.com"
                                                                        target="_blank"><img alt="Facebook"
                                                                            height="auto"
                                                                            src="https://utfs.io/f/da56053e-cc9c-4dc2-850c-68fd716a8917-gjt9e4.png"
                                                                            style="display: block; height: auto; border: 0;"
                                                                            title="facebook"
                                                                            width="32" /></a></td>
                                                                <td style="padding:0 2px 0 2px;"><a
                                                                        href="https://www.twitter.com"
                                                                        target="_blank"><img alt="Twitter"
                                                                            height="auto"
                                                                            src="https://utfs.io/f/53e78934-a33b-4a8b-af66-b3f8b63ddea3-2bmdaf.png"
                                                                            style="display: block; height: auto; border: 0;"
                                                                            title="twitter"
                                                                            width="32" /></a></td>
                                                                <td style="padding:0 2px 0 2px;"><a
                                                                        href="https://www.linkedin.com"
                                                                        target="_blank"><img alt="Linkedin"
                                                                            height="auto"
                                                                            src="https://utfs.io/f/de266e16-53fd-4b45-975e-4b4cf3229850-m7xgck.png"
                                                                            style="display: block; height: auto; border: 0;"
                                                                            title="linkedin"
                                                                            width="32" /></a></td>
                                                                <td style="padding:0 2px 0 2px;"><a
                                                                        href="https://www.instagram.com"
                                                                        target="_blank"><img alt="Instagram"
                                                                            height="auto"
                                                                            src="https://utfs.io/f/ea822195-9ceb-403e-9ec6-d37403f5b2a7-x6i9bs.png"
                                                                            style="display: block; height: auto; border: 0;"
                                                                            title="instagram"
                                                                            width="32" /></a></td>
                                                                        </tr>
                                                                    </table>
                                                                </div>
                                                            </td>
                                                        </tr>
                                                    </table>
                                                    <table border="0" cellpadding="0" cellspacing="0"
                                                        class="menu_block block-3" role="presentation"
                                                        style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;"
                                                        width="100%">
                                                        <tr>
                                                            <td class="pad"
                                                                style="color:#ffffff;font-family:inherit;font-size:14px;text-align:center;">
                                                                <table border="0" cellpadding="0" cellspacing="0"
                                                                    role="presentation"
                                                                    style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;"
                                                                    width="100%">
                                                                    <tr>
                                                                        <td class="alignment"
                                                                            style="text-align:center;font-size:0px;">
                                                                            <!--[if !mso]><!--><input
                                                                                class="menu-checkbox" id="memu-r7c0m2"
                                                                                style="display:none !important;max-height:0;visibility:hidden;"
                                                                                type="checkbox" /><!--<![endif]-->
                                                                            <div class="menu-trigger"
                                                                                style="display:none;max-height:0px;max-width:0px;font-size:0px;overflow:hidden;">
                                                                                <label class="menu-label"
                                                                                    for="memu-r7c0m2"
                                                                                    style="height: 36px; width: 36px; display: inline-block; cursor: pointer; mso-hide: all; user-select: none; align: center; text-align: center; color: #ffffff; text-decoration: none; background-color: #000000; border-radius: 0;"><span
                                                                                        class="menu-open"
                                                                                        style="mso-hide:all;font-size:26px;line-height:31.5px;">☰</span><span
                                                                                        class="menu-close"
                                                                                        style="display:none;mso-hide:all;font-size:26px;line-height:36px;">✕</span></label>
                                                                            </div>
                                                                            <div class="menu-links">
                                                                                <!--[if mso]><table role="presentation" border="0" cellpadding="0" cellspacing="0" align="center" style=""><tr style="text-align:center;"><![endif]--><!--[if mso]><td style="padding-top:5px;padding-right:15px;padding-bottom:5px;padding-left:15px"><![endif]--><a
                                                                                    href="www.example.com"
                                                                                    style="mso-hide:false;padding-top:5px;padding-bottom:5px;padding-left:15px;padding-right:15px;display:inline-block;color:#d8d8d8;font-family:Arial, Helvetica Neue, Helvetica, sans-serif;font-size:14px;text-decoration:none;letter-spacing:normal;"
                                                                                    target="_self">Unsubscribe</a><!--[if mso]></td><![endif]--><!--[if mso]><td style="padding-top:5px;padding-right:15px;padding-bottom:5px;padding-left:15px"><![endif]--><a
                                                                                    href="www.example.com"
                                                                                    style="mso-hide:false;padding-top:5px;padding-bottom:5px;padding-left:15px;padding-right:15px;display:inline-block;color:#d8d8d8;font-family:Arial, Helvetica Neue, Helvetica, sans-serif;font-size:14px;text-decoration:none;letter-spacing:normal;"
                                                                                    target="_self">Help</a><!--[if mso]></td><![endif]--><!--[if mso]><td style="padding-top:5px;padding-right:15px;padding-bottom:5px;padding-left:15px"><![endif]--><a
                                                                                    href="www.example.com"
                                                                                    style="mso-hide:false;padding-top:5px;padding-bottom:5px;padding-left:15px;padding-right:15px;display:inline-block;color:#d8d8d8;font-family:Arial, Helvetica Neue, Helvetica, sans-serif;font-size:14px;text-decoration:none;letter-spacing:normal;"
                                                                                    target="_self">Login</a><!--[if mso]></td><![endif]--><!--[if mso]><td style="padding-top:5px;padding-right:15px;padding-bottom:5px;padding-left:15px"><![endif]--><a
                                                                                    href="www.example.com"
                                                                                    style="mso-hide:false;padding-top:5px;padding-bottom:5px;padding-left:15px;padding-right:15px;display:inline-block;color:#d8d8d8;font-family:Arial, Helvetica Neue, Helvetica, sans-serif;font-size:14px;text-decoration:none;letter-spacing:normal;"
                                                                                    target="_self">Privacy</a><!--[if mso]></td><![endif]--><!--[if mso]></tr></table><![endif]-->
                                                                            </div>
                                                                        </td>
                                                                    </tr>
                                                                </table>
                                                            </td>
                                                        </tr>
                                                    </table>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-9"
                        role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
                        <tbody>
                            <tr>
                                <td>
                                    <table align="center" border="0" cellpadding="0" cellspacing="0"
                                        class="row-content stack" role="presentation"
                                        style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; color: #000000; width: 680px; margin: 0 auto;"
                                        width="680">
                                        <tbody>
                                            <tr>
                                                <td class="column column-1"
                                                    style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-bottom: 5px; padding-top: 5px; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;"
                                                    width="16.666666666666668%">
                                                    <div class="spacer_block block-1"
                                                        style="height:0px;line-height:0px;font-size:1px;"> </div>
                                                </td>
                                                <td class="column column-2"
                                                    style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-bottom: 5px; padding-top: 5px; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;"
                                                    width="66.66666666666667%">
                                                    <div class="spacer_block block-1"
                                                        style="height:35px;line-height:35px;font-size:1px;"> </div>
                                                </td>
                                                <td class="column column-3"
                                                    style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-bottom: 5px; padding-top: 5px; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;"
                                                    width="16.666666666666668%">
                                                    <div class="spacer_block block-1"
                                                        style="height:0px;line-height:0px;font-size:1px;"> </div>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </td>
                            </tr>
                        </tbody>
                    </table>

                </td>
            </tr>
        </tbody>
    </table><!-- End -->
</div>
    `
    )

}

export default VerificationEmail
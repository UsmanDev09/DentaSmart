import { Footnote, Tailwind } from "@onedoc/react-print";

export const Receipt = ({
  id,
  date,
  total,
}: {
  id: number;
  date: string;
  total: number;
}) => (
  <Tailwind>
    <div className="container">
      <div className="p1">
        <img src="http://103.217.176.51:8000/media/1000000026_s04XbPQ.jpg" height="1000px" />
        <div className="head">
          <img width="135" height="135" src="http://103.217.176.51:8000/media/1000000026_s04XbPQ.jpg" alt="" />
        </div>
        <div>
          <h1 className="title">
            CASE REPORT OF ROBERT STEELE <br />July 18, 2022
          </h1>
        </div>

        <div className="table1">
          <table style={{ width: "100%" }}>
            <thead>
              <tr>
                <th>Patient Id</th>
                <th>Name</th>
                <th>Age</th>
                <th>Gender</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>12345678</td>
                <td>Robert Steele</td>
                <td>51</td>
                <td>M</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="pAdd">
          <h2>Patient&apos;s Address:</h2>
          <p>24 Commerce St 1100 Newark NJ 071020000, NEWARK NJ 07102</p>
        </div>
        <div className="table2">
          <h2 style={{ margin: "10px 0" }}>Chat history</h2>
          <table style={{ width: "100%" }}>
            <thead className="thead2">
              <tr>
                <th style={{ backgroundColor: "rgb(211, 74, 74)" }}>
                  Presenting Complaints
                </th>
                <th style={{ backgroundColor: "rgb(96, 142, 96)" }}>
                  Medical History
                </th>
                <th style={{ backgroundColor: "rgb(129, 72, 129)" }}>
                  Allergies/ Medications
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Toothache</td>
                <td style={{ fontWeight: "900" }}>None</td>
                <td style={{ fontWeight: "900" }}>None</td>
              </tr>
              <tr>
                <td>Sensitivity</td>
                <td></td>
                <td></td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="opg">
          <h2>X-ray Analysis: #</h2>
          <p style={{ marginLeft: "5px", fontSize: "20px" }}>
            ( for the case of OPGs, bitewing)
          </p>
        </div>
        <div className="table3">
          <h3 style={{ margin: "20px 0" }}>1. OPG</h3>
          <table style={{ width: "100%" }}>
            <thead>
              <tr>
                <th>Row#</th>
                <th>Tooth#</th>
                <th>Existing procedures</th>
                <th>Pathological Findings</th>
                <th style={{ borderBottom: "none" }}>Dr. Notes</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>02</td>
                <td>Filling</td>
                <td>Impaction</td>
                <td></td>
              </tr>
              <tr>
                <td>2</td>
                <td>03</td>
                <td>Filling</td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>3</td>
                <td>16</td>
                <td>-</td>
                <td>Impaction</td>
                <td></td>
              </tr>
              <tr>
                <td>4</td>
                <td>17</td>
                <td></td>
                <td>Impaction</td>
                <td></td>
              </tr>
              <tr>
                <td>5</td>
                <td>19</td>
                <td>Filling</td>
                <td></td>
                <td></td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="img1">
          <img src="./img/img1.jpg" alt="" width="1000" height="600" />
        </div>
      </div>
      <div className="p2">
        <div className="table3">
          <h3 style={{ margin: "20px 0" }}>2. Bitewing</h3>
          <table style={{ width: "100%" }}>
            <thead>
              <tr>
                <th>Row#</th>
                <th>Existing procedures</th>
                <th>Pathological Findings</th>
                <th style={{ borderBottom: "none" }}>Dr. Notes</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Filling</td>
                <td>-</td>
                <td></td>
              </tr>
              <tr>
                <td>2</td>
                <td>RTC</td>
                <td>-</td>
                <td></td>
              </tr>
              <tr>
                <td>3</td>
                <td>Filling</td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>4</td>
                <td>Filling</td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>5</td>
                <td>-</td>
                <td>Carles</td>
                <td></td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="img2">
          <h3 className="redHead">Red Line represents Bone loss</h3>
          <img src="./img/img2.jpg" alt="" width="900" height="900" />
        </div>
      </div>
      <div className="p3">
        <div className="table3">
          <h3 style={{ margin: "15px 0", color: "#21b9c6" }}>
            Mouth Image Analysis:
          </h3>
          <table style={{ width: "100%" }}>
            <thead>
              <tr>
                <th>Row#</th>
                <th>Existing procedures</th>
                <th>Pathological Findings</th>
                <th style={{ borderBottom: "none" }}>Dr. Notes</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Filling</td>
                <td>-</td>
                <td></td>
              </tr>
              <tr>
                <td>2</td>
                <td>RTC</td>
                <td>-</td>
                <td></td>
              </tr>
              <tr>
                <td>3</td>
                <td>-</td>
                <td>Decay</td>
                <td></td>
              </tr>
              <tr>
                <td>4</td>
                <td>-</td>
                <td>Decay</td>
                <td></td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="img2">
          <img src="./img/img3.jpg" alt="" width="900" height="400" />
        </div>
        <div className="pAdd">
          <h2>Overall Health:</h2>
          <p>68%</p>
        </div>
        <div className="pAdd">
          <h2>Cause:</h2>
          <p>Demineralization of tooth enamel and dentin.</p>
        </div>
        <div className="pAdd">
          <h2>Mechanism:</h2>
          <p>
            Caused by acids produced by bacteria in plaque, leading to tooth
            decay.
          </p>
        </div>
        <h2>Provisional Diagnosis/ Differential Diagnosis:</h2>
        <div className="table4">
          <h3 style={{ margin: "10px 0" }}>Tootache</h3>
          <table>
            <tbody>
              <tr>
                <td>Reversible Pulpitis</td>
                <td className="longBody">
                  Inflammation of the dental pulp (innermost part of the tooth
                  containing dental nerve). Inflammation is mild and tooth pulp
                  is healthy enough to save.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="opts">
          <h2>Treatment Options</h2>
          <ul>
            <li className="opt">
              <span className="optHead">Root Canal Therapy:</span>
              The infected nerve inside the tooth is removed, and the inside of
              the tooth is cleaned and sealed, to save the tooth
            </li>
            <li className="opt">
              <span className="optHead">Extraction:</span>
              The tooth is removed from its socket
            </li>
          </ul>
        </div>
      </div>
      <div className="p4">
        <div className="table5">
          <table className="treatments">
            <thead style={{ backgroundColor: "#21b9c6" }}>
              <tr style={{ color: "white", fontWeight: 700 }}>
                <th
                  className="treatments"
                  style={{ textAlign: "center", padding: "15px 0" }}
                >
                  Criteria
                </th>
                <th
                  className="treatments"
                  style={{ textAlign: "center", padding: "15px 0" }}
                >
                  Root Canal Treatment
                </th>
                <th
                  className="treatments"
                  style={{ textAlign: "center", padding: "15px 0" }}
                >
                  Extraction
                </th>
              </tr>
            </thead>
            <tbody>
              <tr style={{ backgroundColor: "#c6f6fa" }}>
                <td className="treatments" style={{ fontWeight: 900 }}>
                  Objective
                </td>
                <td className="treatments">
                  To save and restore the natural tooth
                </td>
                <td className="treatments">To remove the tooth entirely</td>
              </tr>
            </tbody>
            <tbody>
              <tr>
                <td className="treatments" style={{ fontWeight: 900 }}>
                  Advantages
                </td>
                <td className="treatments">
                  <p style={{ fontSize: 20 }}>Preserves natural tooth</p>
                  <p style={{ fontSize: 20 }}>
                    Maintains natural bite and jaw structure
                  </p>
                  <p style={{ fontSize: 20 }}>Aesthetically pleasing</p>
                </td>
                <td className="treatments">
                  <p style={{ fontSize: 20 }}>
                    Permanently removes the source of pain or infection
                  </p>
                  <p style={{ fontSize: 20 }}>
                    Less expensive in the short term
                  </p>
                </td>
              </tr>
            </tbody>
            <tbody>
              <tr style={{ backgroundColor: "#c6f6fa" }}>
                <td className="treatments" style={{ fontWeight: 900 }}>
                  Disadvantages
                </td>
                <td className="treatments">
                  <p style={{ fontSize: 20 }}>Can be more expensive</p>
                  <p style={{ fontSize: 20 }}>
                    Procedure can be more complex and time-consuming
                  </p>
                  <p style={{ fontSize: 20 }}>Possibility of re-infection</p>
                </td>
                <td className="treatments">
                  <p style={{ fontSize: 20 }}>Loss of natural tooth</p>
                  <p style={{ fontSize: 20 }}>
                    Potential for shifting of adjacent teeth
                  </p>
                  <p style={{ fontSize: 20 }}>
                    May need a dental implant or bridge for replacement, which
                    can be costly
                  </p>
                </td>
              </tr>
            </tbody>
            {/* Add more tbody sections as needed */}
          </table>
        </div>
        <div className="risk">
          <h2>Risk Factors:</h2>
          <ul>
            <li className="risks">Poor oral hygiene</li>
            <li className="risks">High sugar diet.</li>
            <li className="risks">Infrequent dental visits.</li>
            <li className="risks">Lack of fluoride exposure.</li>
          </ul>
        </div>
        <div className="risk">
          <h2>Preventions:</h2>
          <p style={{ color: "black", fontSize: 18 }}>
            Reversible pulpitis is not only treatable but also preventable
          </p>
          <ul>
            <li className="preventions">Maintain good oral hygiene</li>
            <li className="preventions">See a dentist regularly</li>
            <li className="preventions">
              Seek immediate attention for tooth pain or sensitivity
            </li>
            <li className="preventions">Brush teeth twice daily</li>
            <li className="preventions">Floss daily</li>
            <li className="preventions">Limit or avoid sugary foods</li>
          </ul>
        </div>
      </div>
      <div className="p5">
        <div className="risk">
          <h2>Consequences/Risks</h2>
          <ul className="risks" style={{ fontSize: 20 }}>
            {/* Add more consequences/risks */}
            <li className="risks">
              Untreated reversible pulpitis can lead to irreversible pulpitis,
              which may require more invasive treatment like root canal therapy
              or extraction
            </li>
            <li className="risks">
              Severe tooth pain or infection can affect overall quality of life
            </li>
            <li className="risks">
              Infection can spread to surrounding teeth or gums
            </li>
          </ul>
        </div>
        <div className="table6">
          <h3 style={{ margin: "20px 0" }}>Treatments Summary</h3>
          <table style={{ width: "100%" }}>
            <thead>
              <tr>
                <th>Treatment Plan</th>
                <th>Detail</th>
                <th style={{ borderBottom: "none" }}>Cost</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Root Canal Treatment</td>
                <td>
                  RCT for 3 Teeth # 02, # 03, # 19 with follow-ups
                </td>
                <td>$3,500</td>
              </tr>
              <tr>
                <td>Extraction</td>
                <td>Extraction of Teeth # 16, # 17</td>
                <td>$1,000</td>
              </tr>
              <tr>
                <td>Medications</td>
                <td>Antibiotics, Pain Killers</td>
                <td>$100</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="pAdd">
          <h2>Total: ${total}</h2>
        </div>
        <Footnote>
          <p>This is a sample receipt</p>
        </Footnote>
      </div>
    </div>
  </Tailwind>
);

export default Receipt;

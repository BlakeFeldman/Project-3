import React, { Component } from "react";
import Sidebar from "../components/Nav/SideBar/SideBar";
import PageTabs from "../components/EducationPage/PageTabs";
import Styled from "styled-components";
import BottomNav from "../components/Nav/BottomNav";
import Typography from "@material-ui/core/Typography";
import SubmitModal from "../components/SubmitModal/SubmitModal";
import CardContent from "@material-ui/core/CardContent";


const IntroItem = Styled.div`
grid-column-start: col-2;
grid-column-end: col-2;
grid-row-start: row-1;
grid-row-end: row-1;
margin: 10px 0 10px 0;
background-color: white;
width: 99%;
border-radius: 10px;
border-style: solid;
border-width: 1px;
border-color: #c9c9c9;
`;

const Grid = Styled.div`
  display: grid;
  grid-template-columns: [col-1] 20% [col-2] 80% ;
  grid-template-rows: [row-1] auto [row-2] auto [row-3] auto [row-4] auto;
  justify-content: start;
`;

const NavWrapperDiv = Styled.div`
  margin-bottom: 100px;
`;

const SideBarItem = Styled.div`
  grid-column-start: col-1;
  grid-column-end: col-1;
  grid-row-start: row-1
  grid-row-end: span row-4
  margin-right: 10px;
  padding-right: 20px;
  border-right: solid rgba(189, 195, 199, 0.7) 1px;
`;

const TabItem = Styled.div`
  grid-column-start: col-2;
  grid-column-end: span col-2;
  grid-row-start: row-2;
  grid-row-end: row-4;
`;

const SubmitItem = Styled.div`
  margin: 200pt 0 30pt 10pt;
  padding-top: 15pt;
  border: 1px dashed #66bb6a;
  background-color: white;
`;

const SubmitTextWrapper = Styled.div`
  margin-left: 15px;
`;

const BottomNavSpacer = Styled.div`
  margin-top: 20px;
`;

class Education extends Component {
  state = {
    id: "",
    location: "",
    name: "",
    posts: [],
  };



  componentDidMount() {


    // Get session cookie and update posts
    fetch("/api/session", {
      method: "Get",
      mode: "cors",
      cache: "no-cache",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      redirect: "follow",
      referrer: "client",
    })
      .then(res => res.json())
      .then(
        result => {
          const { user, loc, name } = result.data;
          console.log(result);
          this.setState({
            id: user,
            location: loc,
            name: name,
          });
          this.updatePosts();
        },
        error => {
          console.log(error);
        }
      );
  }

  updatePosts = () => {
    fetch(`/api/posts/50/${this.state.location}`, {
      method: "Get",
      mode: "cors",
      cache: "no-cache",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      redirect: "follow",
      referrer: "client",
    })
      .then(res => res.json())
      .then(
        result => {
          console.log(result);
          const filteredPosts = result.filter(post => {
            return post.category === "Education";
          });
          this.setState({
            posts: filteredPosts,
          });
        },
        error => {
          console.log(error);
        }
      );
  };

  render() {

    return (

      <main>
        <NavWrapperDiv>
          <Sidebar />
        </NavWrapperDiv>
        <Grid>
          <SideBarItem style={{ textAlign: "center" }}>
            <SubmitItem>
              <SubmitTextWrapper>
                <Typography color="black">
                  Want to contribute? Just click the button to create your own
                  post.
                </Typography>
              </SubmitTextWrapper>
              <SubmitModal
                posts={this.state.posts}
                updatePosts={this.updatePosts}
                id={this.state.id}
                name={this.state.name}
                location={this.state.location}
              />
            </SubmitItem>
            <div style={{ height: "10%" }} />
          </SideBarItem>

          <IntroItem>
            <CardContent>
              

            <h4>Below is a Special Needs Medical Glossary, courtesy of <a href="https://childrenofallnations.com/waiting-child/special-needs-medical-glossary/">Children of All Nations</a>.</h4>
                <br></br>
               <hr></hr>
                <br></br>
                <p><b>Blood Conditions</b>
<br></br>
                <br></br>
                <b>Cancer</b><br></br>
                Cancer is the uncontrolled growth of abnormal cells in the body. Cancerous cells are also called malignant cells. Symptoms of cancer depend on the type and location of the tumor. Some cancers may not have any symptoms at all. In certain cancers, symptoms do not start until the disease has reached an advanced stage.
<br></br>
                The following symptoms can occur with most cancers: chills, fatigue, fever, loss of appetite, malaise, night sweats, and weight loss. Treatment and prognosis also vary based on the type of cancer and its stage. We have seen cancers of the eyes, brain, and lungs in the waiting children.
<br></br>
                <br></br>
               <b> Hemophilia</b><br></br>
                Hemophilia is a rare inherited disorder in which the blood does not clot normally. Symptoms may include excessive bruising, joint pain, unexplainable bleeding, prolonged bleeding, and nose bleeds. There are three different types of hemophilia; however, children do not typically have a test completed to determine which clotting factor is absent.
<br></br>
                Treatment involves clotting-factor medication. Risks include internal bleeding, damage to joints, infections, and adverse reactions to the medication. Although hemophilia is not “curable,” most individuals can lead relatively normal and active lives.
<br></br>
                <br></br>
                <b>Phenylketonuria (PKU)</b><br></br>
                PKU is a rare condition in which a baby is born without the ability to properly break down an amino acid called phenylalanine. People with PKU need to follow a diet that limits phenylalanine, which is found mostly in high-protein foods.  If PKU is realized early on and the diet monitored, children can lead relatively normal lives.
<br></br>
                Children with PKU are at risk for mental retardation, behavior problems, hyperactivity, stunted growth, microcephaly, and eczema.
<br></br>
                <br></br>
                <b>Thalassemia (Mediterranean anemia)</b><br></br>
                Thalassemia (Mediterranean anemia) is an inherited blood disorder characterized by less hemoglobin and fewer red blood cells in your body than normal. Symptoms include fatigue, weakness, shortness of breath, paleness, jaundice, slow growth, protruding abdomen, dark urine, and facial bone deformities.
<br></br>
                There are two major types of Thalassemia: alpha and beta, named for the two protein chains that make up normal hemoglobin. Some children will have a Hemoglobin test in their file, while some orphanages and hospitals do not have the resources to provide the test to determine which type the child has. Both types can range from mild to severe. It is important to note that for children who receive blood transfusions, excessive amounts of iron can build up in the blood and internal organs.
<br></br>
                Chelation therapy helps remove the buildup of iron; however, this therapy is not often available in the child’s home country. Without chelation therapy, early mortality is inevitable.
<br></br>
                α Thalassemia trait is characterized by mild anemia and typically has no severe effects. This type is rarely diagnosed.
                Hemoglobin H disease is a subtype of α Thalassemia. Children with this disease may require regular blood transfusions.
                β Thalassemia is characterized by mild anemia and typically has no severe effects. This type is rarely diagnosed.
                β Thalassemia intermedia creates mild to severe anemia. These children do not typically require regular blood transfusions, however may need one during illnesses or later in life during pregnancy.
                β Thalassemia major is also referred to as Cooley’s anemia. Children with this type will require regular blood transfusions to survive.
<br></br>
                <br></br>
                <b>Central Nervous System</b>
<br></br>
                <br></br>
                <b>Arachoid cysts</b><br></br>
                Arachoid cysts are cerebrospinal fluid-filled sacs that may develop between the surface of the brain and the cranial base or on the arachnoid membrane. These cysts can be present at birth or caused by injury.
<br></br>
                Symptoms may include dizziness, nausea, headaches, problems with vision or hearing, back pain, and weakness. Treatment may or may not be necessary, depending on the symptoms experienced. If treatment is necessary, the two most common treatments are insertion of a shunt or fenestration (opening of the cyst).
<br></br>
                <br></br>
                <b>Cerebral Palsy</b><br></br>
                Cerebral Palsy (CP) is an umbrella term for any group of disorders caused by abnormal development or damage in one or more parts of the brain that control muscle tone and motor activity (movement). The effects of CP can range from mild or subtle to very profound. Some issues linked to CP may include difficulty controlling and coordinating muscles, breathing, vision and hearing issues, seizures, and mental retardation.
<br></br>
                There are several different types of CP characterized by how the disorder affects the muscles. It is important to note that CP is typically non-progressive, meaning it will not get worse over time. Most children will not have a defined type of CP, however, they would fall under the mild-moderate categories. For the purposes of the Waiting Child Profile, the severities are defined as follows:
<br></br>
                Mild: The child may have some diminished function of one or more limbs, such as walking with a limp or mildly decreased strength.  The child is able to walk and function independently, but may require some therapy to strengthen muscles.
                Moderate: The child may require some levels of assistance to function in daily life (ie: using a walker). The child may have more mild to moderate global delays, such as gross and fine motor and language skills.
                Severe: The child may have significant global delays and would require continual, long-term assistance.
<br></br>
                <br></br>
                <b>Epilepsy</b><br></br>
                Epilepsy is a general term for conditions with recurring seizures. There are many kinds of seizures, but all involve abnormal electrical activity in the brain that causes an involuntary change in body movement or function, sensation, awareness, or behavior. Generally seizure disorders are not curable, but they can be controlled with medication and sometimes surgery. In most cases, individuals with seizure disorders can live relatively normal lives, with only the severest cases requiring restrictions.
<br></br>
                <br></br>
                <b>Hydrocephalus</b><br></br>
                Hydrocephalus is a condition in which the primary characteristic is excessive accumulation of cerebral spinal fluid (CSF) in the brain. The excessive accumulation of CSF results in an abnormal dilation of the spaces in the brain called ventricles. This dilation causes potentially harmful pressure on the tissues of the brain.
<br></br>
                Hydrocephalus can be congenital or acquired through injury.  In young children, typically the first symptom is an increased head size.  In older children, symptoms may include an abnormal gait, nausea, incontinence, vision and balance issues, and changes in cognition. Treatment is most often a shunt, which is placed in the brain to allow the fluid to drain into another part of the body.  A third ventriculostomy is also a potential surgery where a hole is made in the brain ventricle to drain the fluid so it can be reabsorbed by the brain.
<br></br>
                Many children diagnosed with the disorder benefit from rehabilitation therapies and educational interventions, and go on to lead normal lives with few limitations.
<br></br>
                <br></br>
                <b>Microcephaly</b><br></br>
                Microcephaly is a medical condition in which the circumference of the head is smaller than normal because the brain has not developed properly or has stopped growing. Microcephaly can be present at birth or it may develop in the first few years of life. It is most often caused by genetic abnormalities that interfere with the growth of the cerebral cortex during the early months of fetal development.
<br></br>
                It is associated with Down syndrome, chromosomal syndromes, and neurometabolic syndromes.  Depending on the severity of the accompanying syndrome, children with microcephaly may have mental retardation, delayed motor functions and speech, facial distortions, dwarfism or short stature, hyperactivity, seizures, difficulties with coordination and balance, and other brain or neurological abnormalities. Some children with microcephaly will have normal intelligence and a head that will grow bigger, but they will track below the normal growth curves for head circumference.
<br></br>
                <br></br>
                <b>Neurofibromatosis</b><br></br>
                Neurofibromatosis (NF) is a condition that causes tumors to grow on nerve tissue, producing skin and bone abnormalities. NF is often diagnosed in childhood; occasionally in infancy (in children with severe cases), but usually around 3-16 years of age. Some children live almost unaffected by the condition; rarely, others might be severely disabled.
<br></br>
                The first notable sign of NF is café au lait spots on the body. Other symptoms include hearing loss, vision loss, and skeletal abnormalities. There’s no specific cure for NF, but tumors usually can be removed and related complications treated. Because learning disabilities occur in approximately half the children with NF, some might need extra help in the classroom.
<br></br>
                <br></br>
                <b>Spina Bifida</b><br></br>
                Spina Bifida (SB) is a birth defect that involves the incomplete development of the spinal cord or its coverings.
<br></br>
                SB occulta is the most mild form and typically has no long-term effects. It is usually only discovered if the child is being screened for other issues.
                Meningocele occurs when the membranes responsible for covering and protecting the brain and spinal cord (meninges) protrude through a hole in the vertebrae.
                Myelomeningocele is when both the meninges and the spinal cord push through the vertebrae. Children with myelomeningocele also typically have hydrocephalus as well and are at risk for paralysis. All children are at risk for some nerve damage and possible incontinence.
                The terms meningocele and myelomeningocele are typically used interchangeably due to translations. However, most of the children will fall under the category of meningocele. Most often, these children are able to recover from surgery and lead full and active lives.
<br></br>
                <br></br>
                <b>Congenital Heart Disease</b><br></br>
                Congenital Heart Disease (CHD) refers to a problem with the heart’s structure and function due to abnormal heart development before birth. While congenital heart disease is present at birth, the symptoms may not be immediately obvious.
<br></br>
                Defects such as coarctation of the aorta may not cause problems for many years. Other problems, such as a small ventricular septal defect (VSD), may never cause any problems and some people with VSD have normal physical activity and a normal life span.
<br></br>
                Some congenital heart diseases can be treated with medication alone, while others require one or more surgeries. All defects could be considered minor or severe, depending on how they affect the individual child.
<br></br>
                It is important to speak with a physician about each possible diagnosis to gain a good understanding of what your family would be comfortable handling. For the purpose of the Waiting Child Profile, CHD is divided into the categories listed below. The majority of the children referred with CHD would be categorized as having moderate to severe conditions.
<br></br>
                Mild: Mild heart conditions are defined as only one defect being present. This would include defects such as VSD or ASD. It would also include a child who had a significant heart condition that has been surgically corrected, with a positive recovery.
                Moderate: Moderate heart conditions would be defined as either more than one defect (for example: VSD and ASD) or a more severe defect, with a surgery having already been completed (Tetralogy of Fallot, post Glenn shunt surgery).
                Severe: Severe heart conditions would be defined as any defect that would require significant medical intervention and the child has had no corrective surgery completed. Defects that would into this category would be Endocardial Cushion Defect, Transposition of the Great Vessels, and Tetralogy of Fallot with pulmonary atresia.
<br></br>
                <b>Craniofacial</b>
<br></br>
                <br></br>
                <b>Cleft Lip/Palate</b><br></br>
                Cleft Lip/Cleft Palate is a congenital defect in the facial tissues of the lips, mouth, and nose where the tissues do not fuse together, leaving a space often caused by a genetic mutation or other developmental effects from drugs or alcohol.
<br></br>
                A cleft lip occurs when the tissue of the upper lip does not fuse together. A cleft palate occurs when the tissue on the roof of the mouth (palate) does not fuse together. The clefts can be unilateral (only occurring on one side) or bilateral (occurring on both sides). The severity can range from a small slit or notch to a large gap. Often cleft lip and cleft palate are associated with each other, but this is not always the case. It is possible to have a cleft palate without cleft lip or cleft lip without a cleft palate. The most severe cases generally involve bilateral cleft lip and cleft palate.
<br></br>
                There are varying degrees of cleft lip and palate, however, most of the children will have cleft lips that are second degree (cleft is above pink of the lip, but not to the nostril) or third degree (cleft extends into the nostril) and the cleft palate is almost always third degree (cleft in both hard and soft palate and affecting the bone from which teeth grow).
<br></br>
                For the most part, individuals with cleft lip only do not experience many issues, especially if surgically corrected. However, individuals with cleft palate have the most issues with eating, speaking, occasionally breathing, and can sometimes sustain hearing loss and other problems. Cleft lips and palates are correctable and surgeries generally begin at a young age. Cleft palates may require multiple surgeries throughout youth and adolescence. After treatment, speech and other therapies are often required. Orthodontics may also be necessary at a later age.
<br></br>
                <br></br>
                <b>Eye/Orbital Deformities</b><br></br>
                Eye or orbital deformities involve abnormal growth of the bones of the skull and face which can cause the displacement of the orbit (the bony area surrounding the eyeball). These bony shells of the eye expand for the first two years of life as the eye grows.
<br></br>
                Protrusions, herniation, and sunken or wide-set eyes are examples of orbital deformities. Craniofacial surgery is often required to correct eye and orbit deformities.
<br></br>
                <br></br>
                <b>Facial Deformities</b><br></br>
                Facial deformities are often characterized by disproportionate or missing features, and/or abnormal growth. Facial deformities can be caused by congenital defects, injury, or environmental causes.  Sometimes we see children who have a facial cleft in conjunction with cleft palate. A facial cleft typically starts at the lip and will extend into the cheek and eye area.
<br></br>
                Severe facial deformities can cause complications with vision, hearing, and sometimes, breathing. Most individuals with a facial deformity can live fairly normal lives, with little to no treatment. Mild facial deformities can often be corrected with cosmetic surgery, if necessary. In the most severe cases, extensive cranial-facial surgery is required to prevent complications.
<br></br>
                <br></br>
                <b>Microtia</b><br></br>
                Microtia is defined as an incomplete development of the ear. In most cases, it only affects one ear. It can range in severity, from a malformed outer ear, to the absence of the outer ear and ear canal opening.  Children may or may not have hearing loss in the affected ear.
<br></br>
                <br></br>
                <b>Developmental</b>
<br></br>
                <br></br>

                <b>Autism</b><br></br>
                Autism is a disorder of neural development that is characterized by impaired social interaction and communication, and by restricted and repetitive behavior. People with autism may be overly sensitive in sight, hearing, touch, smell, or taste, have unusual distress when routines are changed, or perform repeated body movements.
<br></br>
                Symptoms can range from moderate to severe. An early, intensive, and appropriate treatment program will greatly improve the outlook for most young children with autism. Most programs will build on the interests of the child in a highly-structured schedule of constructive activities. Visual aids are also often helpful.
<br></br>
                <br></br>
                <b>Down Syndrome</b><br></br>
                Down Syndrome is a genetic disorder that causes lifelong mental retardation, developmental delays, and other problems. Down syndrome varies in severity, so developmental problems range from moderate to serious.
<br></br>
                Children with Down syndrome typically have flattened facial features, a protruding tongue, small head, abnormally shaped eyes for the child’s ethnic group, and abnormally shaped ears. They may also have poor muscle tone, short fingers, and abnormal flexibility.
<br></br>
                These children are also at higher risk for heart defects, leukemia, infectious diseases, dementia, sleep apnea, and obesity. In general, children with Down syndrome usually meet developmental milestones, but it may take them longer than it does a child without Down syndrome. For example, children with Down syndrome may take twice as long to sit, crawl, walk, or talk. However, early intervention programs, started as soon as possible, may give kids with Down syndrome the best chance of success.
<br></br>
                <br></br>
                <b>Developmental delays</b><br></br>
                Developmental delays are diagnosed when a child does not reach developmental milestones at the expected times. Developmental milestones are determined by the average age at which children attain each skill.
<br></br>
                Statistically, about 3% of children will not meet them on time, but only about 15-20% of these children will actually have abnormal development. The rest will eventually develop normally over time, although a little later than expected. Nearly all children adopted internationally will have some level of developmental delay due to not being raised in a family setting.
<br></br>
                If a child is diagnosed with a developmental delay as a special need, this indicates they are delayed in comparison to other children in the orphanage.
<br></br>
                <br></br>
                <b>Gross Motor Skill delays</b><br></br>
                Delays in gross motor skills involve the large muscles of the body that enable such functions as walking, kicking, sitting upright, lifting, and throwing a ball. A person’s gross motor skills depend on both muscle tone and strength.
<br></br>
                A child with a gross motor delay may not meet milestones on target due to prematurity, heart conditions, or exposure to alcohol and drugs in utero.
<br></br>
                <br></br>
                <b>Language Skill delays</b><br></br>
                Delays in language skills involve acquisition of day to day language. Children usually begin to babble around the age of six months, creating distinctive words around the age of one year, and able to speak simple sentences around the age of two.
<br></br>
                Research has shown that a child who is just beginning to talk must hear a word approximately 500 times before it will become part of his active vocabulary. In an institutionalized setting, the children may not have as much exposure as children in a family setting. Many children are delayed in language acquisition. However, if a child  is labeled with a delay in language, there could be many causes. Children with cleft lip and palate or hearing issues are often delayed in language development. It is also possible for a child to have a learning delay that has affected language.
<br></br>
                <br></br>
                <b>Cognitive Development</b><br></br>
                Cognitive development includes the ability to analyze, evaluate, retain information, recall experiences, make comparisons, and determine action. There can be many reasons for a delay in this development (brain injury, lack of stimulation). For the purposes of the application, cognitive delays would be defined as follows:
<br></br>
                Slight delay: A slight delay would be categorized as mildly affecting day-to-day life. Perhaps the child requires extra assistance when learning new tasks or needs more one-on-one attention. The child would be able to complete simple tasks, would be responsive to instructions, and though possibly not meeting developmental milestones at the appropriate time, is meeting the milestones.
                Significant delay: A significant delay would be categorized as affecting day-to-day life and their ability to complete self-care. The child would most likely require significant one-on-one attention and ongoing care.
                Global delay: Global delays include delays in all areas of development. It is usually caused by static (does not worsen with time) encephalopathy, occurring before or near the time of birth. Causes of global delays include prematurity, cerebral malformations, chromosomal disorders, infections, and progressive encephalopathies, such as metabolic diseases, hypothyroidism, neurocutaneous syndromes, like neurofibromatosis and tuberous sclerosis, Rett syndrome, and hydrocephalus.
<br></br>
                <br></br>
                <b>Infectious Diseases</b>
<br></br>
                <br></br>
                <b>Encephalitis</b><br></br>
                Encephalitis is irritation and swelling of the brain, usually due to infections. Treatment depends on the cause of the infection. Encephalitis is not contagious, although the cause of the infection can be. Encephalitis can be caused byWest Nile, Japanese B, Lyme disease, rabies, meningitis, or syphilis. Mild symptoms can include headache, loss of energy, and poor appetite, while severe symptoms can include nausea, vomiting, confusion, personality changes, seizures, memory loss, and coma.
<br></br>
                <br></br>
                <b>Hepatitis B</b><br></br>
                Hepatitis B is a disease that affects the liver. When the virus is active, it can cause symptoms similar to that of the flu. Someone that has been exposed to Hepatitis B may have symptoms one to four months later. Some people with Hepatitis B do not notice symptoms until they become quite severe. Some have few or no symptoms, but even someone that doesn’t notice any symptoms can still transmit the disease to others. Some people carry the virus and are contagious for the rest of their lives.
<br></br>
                Acute Hepatitis needs no treatment, other than careful monitoring of liver function, which involves blood tests. The acute illness usually goes away after two to three weeks. The liver usually returns to normal within four to six months in almost all patients that are infected.
<br></br>
                Some people develop chronic Hepatitis. People who have chronic Hepatitis B stay infectious. Patients with chronic hepatitis are treated with antiviral medications. Hepatitis B cannot be cured, but these medications may help lessen the infection. They are considered carriers of the disease, even if they do not have any symptoms.
<br></br>
                Most children referred with a Hepatitis B diagnosis would be considered carriers, meaning they are infected with the virus, however, have no outward symptoms.
<br></br>
                <br></br>
                <b>Syphilis</b><br></br>
                Syphilis is an easily spread infection caused by the bacteria Treponema pallidum. The symptoms of syphilis depend on the stage of the disease. Many people do not have symptoms. In general, painless sores and swollen lymph nodes are symptoms of primary syphilis.
<br></br>
                Those with secondary syphilis may also have fever, fatigue, aches and pains, and loss of appetite, among other symptoms. Tertiary syphilis causes heart, brain, and nervous system problems. With prompt treatment and follow-up care, syphilis can be cured. Late-stage syphilis can lead to long-term health problems despite therapy. Most of the children referred from will have congenital syphilis and will have received treatment.
<br></br>
                <br></br>
                <b>Tuberculosis</b> <br></br>
                Tuberculosis (TB) is caused by a bacterium called Mycobacterium tuberculosis. The bacteria usually attack the lungs, but TB bacteria can attack any part of the body, such as the kidney, spine, or brain. Symptoms include a cough that lasts longer than three weeks, weakness and fatigue, weight loss, and fever or chills.
<br></br>
                <br></br>
                <b>Nephrological</b><br></br>
                <br></br>
                <b>Hydronephrosis</b><br></br>
                Hydronephrosis is the swelling of one kidney due to a backup of urine. Symptoms include abdominal pain, nausea, fever, urinary tract infections, and increased frequency of urination. Hydronephrosis is a condition that occurs with a disease. It is not a disease itself.
<br></br>
                Conditions that are often associated with unilateral hydronephrosis include: acute unilateral obstructive uropathy, chronic unilateral obstructive uropathy, vesicoureteric reflux (backflow of urine from bladder to kidney), or nephrolithiasis (kidney stones). Treatment and prognosis for unilateral hydronephrosis depend on what is causing the swelling of the kidney. Treatment may include: a ureteral stent (tube that allows the ureter to drain into the bladder), a nephrostomy tube (allows the blocked urine to drain through the back), or antibiotics for infections.
<br></br>
                <br></br>
                <b>Polycystic Kidney Disease (PKD)</b><br></br>
                Polycystic kidney disease is a kidney disorder passed down through families, in which multiple cysts form on the kidneys causing them to become enlarged. People with PKD have multiple clusters of cysts on the kidneys. The exact action that triggers cyst formation is unknown.
<br></br>
                In early stages of the disease, the cysts cause the kidney to swell, disrupting kidney function and leading to chronic high blood pressure and kidney infections. The cysts may cause the kidneys to increase production of erythropoietin, a hormone that stimulates production of red blood cells. This leads to too many red blood cells, rather than the anemia seen in chronic kidney disease. Symptoms include pain and swelling, blood in the urine, and excessive urination. It can also be associated with drowsiness, joint pain, and high blood pressure.
<br></br>
                The disease gets worse slowly, eventually resulting in end-stage kidney failure. It is also associated with liver disease, including infection of liver cysts. Medical treatment may provide relief of symptoms for many years. The absence of systemic disease or autoimmune disease makes people with polycystic kidney disease good candidates for kidney transplantation.
<br></br>
                <br></br>
                <b>Orthopedic</b>
<br></br>
                <br></br>
                <b>Arthrogryposis</b><br></br>
                Arthrogryposis is the name given to a group of disorders characterized by multiple joint contractures throughout the body present at birth. It is usually caused by decreased fetal movement in utero.
<br></br>
                Decreased movement can be caused by central nervous system malformations, such as spina bifida, brain malformations, neuromuscular disorders, maternal infections or fever, or too little amniotic fluid. The particular joint contractures vary in each child, however, there are several common characteristics: the legs and arms are affected, with wrists and ankles being the most deformed, the joints in the legs and arms may not be able to move at all, muscles in the legs and arms are thin and weak or even absent, and/or the hips may be dislocated.
<br></br>
                Some infants with arthrogryposis have facial deformities, curvature of the spine, genital deformities, cardiac and respiratory problems, and skin defects.  There is no cure for arthrogryposis, but early vigorous physical therapy can help stretch out the contracted joints and develop the weak muscles. Splints can also help stretch joints, especially at night. Orthopedic surgery may also be able to relieve or correct joint problems.
<br></br>
                <br></br>
                <b>Clubbed Feet</b><br></br>
                Clubbed feet refers to an inversion of the foot at the ankle. The foot is twisted inward and downward so that the child cannot place the sole flat on the ground but must walk on the ball, the side, or even the top of the foot.
<br></br>
                During development, the posterior and medial tendons and ligaments (in the back and inside) of the foot fail to keep pace with the development of the rest of the foot. As a result, these tendons and ligaments tether the posterior and medial parts of the foot down, causing the foot to point downward and twist inward. The bones of the feet are therefore held in that abnormal position.
<br></br>
                Over time, if uncorrected, the bones will become misshapen. Treatment can involve serial casting, splits or braces and/or surgery. Children can have either a unilateral clubbed foot, which means only one foot is affected, or bilateral clubbed feet, which means both feet are affected.
<br></br>
                <br></br>
                <b>Clubbed Hands</b><br></br>
                Clubbed hands are also referred to as radial clubbed hands. This can affect one or both hands. In radial clubbed hands, a baby’s radius was not formed properly in the womb, which in turn causes the wrist to be in a fixed bent position toward the thumb side of the hand.  In most forms of radial clubbed hands, not only is the bone abnormal, but the soft tissues and flesh of the forearm are also abnormal.
<br></br>
                The arrangement of muscles and nerves may be unbalanced and some muscles and nerves may even be absent. The most severe cases lead to significant problems in the function of the hand, fingers, and elbow. The entire arm will be shorter, with marked curving of the forearm, stiffness of the elbow and fingers. In these situations, the thumb will either be very small or absent.
<br></br>
                The long-term outlook is dependent on the severity of the deformity. In mild cases, intermittent therapy throughout growth is required to maintain alignment and strength. These children will have minor limitations of motion, function, and strength. In the more severe cases, there will be marked limitation of motion, strength, and function. In these situations, growth will also be limited in that forearm.
<br></br>
                <br></br>
                <b>Complete absence of a limb (or more than one limb)</b><br></br>
                This indicates that either no bones of the limb developed at all, where a prosthetic would not be able to be used, or the limb is significantly underdeveloped.
<br></br>
                <br></br>
                <b>Deformity of fingers and/or toes</b><br></br>
                This may take on many forms. The types of deformities are defined below.  Each deformity may affect one or multiple fingers or toes. Most often, digital deformities are caused by amniotic band syndrome, which occurs in utero. Damage to the amnion (part of the placenta) may produce fiber-like bands that can trap the arms, legs, fingers, or toes of the fetus. These bands reduce blood supply to the areas and cause them to develop abnormally. These children may also have deformed or missing limbs, clubbed feet or permanent “band” or indentation around a limb.
<br></br>
                Adactayly refers to missing digits.<br></br>
                Brachydactyly refers to shortened or underdeveloped digits.<br></br>
                Polydactyly refers to one or more extra digits.<br></br>
                Syndactyly refers to fused or combined digits. This may be surgically correctable, or the bones may be permanently fused or absent.
<br></br>
                <br></br>
                <b>Dwarfism</b><br></br>
                Dwarfism is a condition characterized by short stature. Technically, that means an adult height of 4 feet 10 inches or under and can be caused by any one of more than 200 conditions, most of which are genetic.
<br></br>
                As a child with dwarfism grows, they may have delayed development of some motor skills, such as sitting up and walking, a greater susceptibility to ear infections and hearing loss, breathing problems caused by small chests, weight problems, curvature of the spine (scoliosis), bowed legs, trouble with joint flexibility and early arthritis, lower back pain or leg numbness, and crowding of teeth in the jaw. At times a child may need surgery to help alleviate some of these symptoms.
<br></br>
                Most children referred that are diagnosed with dwarfism will have achondroplasia, which is characterized by disproportionately short arms and legs compared to the head and trunk.
<br></br>
                <br></br>
                <b>Hip Dysplasia</b><br></br>
                Hip dysplasia is the medical name used to describe a problem with formation of the hip joint in children. The location of the problem can either be the ball of the hip joint (femoral head), the socket of the hip joint (the acetabulum), or both.
<br></br>
                The treatment of hip dysplasia depends on the age of the child. The goal of treatment is to properly position the hip joint (“reduce” the hip). Once an adequate reduction is obtained, the doctor will hold the hip in that reduced position and allow the body to adapt to the new position. The younger the child, the better capacity to adapt the hip, and the better chance of full recovery.
<br></br>
                Over time, the body becomes less accommodating to repositioning of the hip joint. If the hip dysplasia is significant, the children are often treated with braces or surgery. The success of treatment depends on the age of the child, and the adequacy of the reduction. In a newborn infant with a good reduction, there is a very good chance of full recovery. When treatment begins at older ages, the chance of full recovery decreases. Children who have persistent hip dysplasia have a chance of developing pain and early hip arthritis later in life. Surgery to cut and realign the bones (hip osteotomy), or a hip replacement, may be needed later in life.
<br></br>
                <br></br>
                <b>Paraplegia</b><br></br>
                Paraplegia is an impairment in motor and/or sensory function of the lower extremities. It is usually the result of spinal cord injury or a congenital condition, such as spina bifida, which affects the neural elements of the spinal canal. The area of the spinal canal which is affected in paraplegia is either the thoracic, lumbar, or sacral regions. Most often, children with paraplegia will use a wheelchair.
<br></br>
                <br></br>
                <b>Requiring assistance to walk</b><br></br>
                Children who require assistance to walk cannot stand or walk solely on their own, but are not confined to a wheelchair. Their need for assistance may be caused by cerebral palsy, spina bifida, or other limb issues. Most often the children will use a walker or crutches.
<br></br>
                <br></br>
                <b>Rheumatoid Arthritis</b><br></br>
                Rheumatoid arthritis is a general term for the most common types of arthritis in children. It is a long-term (chronic) disease resulting in joint pain and inflammation, which may lead to joint damage.
<br></br>
                The first signs of arthritis can be subtle or obvious. Signs may include limping or a sore wrist, finger, or knee. Joints may suddenly swell and remain enlarged. Stiffness in the neck, hips, or other joints can also occur. Rashes may suddenly appear and disappear, developing in one area and then another. High fevers that tend to spike in the evenings and suddenly disappear are characteristic of systemic juvenile rheumatoid arthritis.
<br></br>
                In many cases, it may be treated with a combination of medication, physical therapy, and exercise. In specific situations, a child may require injection of corticosteroids into the joint or possibly surgery. The goals of treatment are to relieve pain and inflammation, slow down or prevent the destruction of joints, and restore use and function of the joints to promote optimal growth, physical activity, and social and emotional development.
<br></br>
                <br></br>
                <b>Rickets</b><br></br>
                Rickets is the softening and weakening of bones in children, usually because of an extreme and prolonged vitamin D deficiency. Rickets can cause skeletal deformities, fragile bones, impaired growth, dental problems, bone pain, and muscle weakness.
<br></br>
                If a vitamin D or calcium deficiency causes rickets, adding vitamin D or calcium to the diet generally corrects any resulting bone problems for a child. Rickets due to a genetic condition may require additional medications or other treatment.
<br></br>
                Some skeletal deformities caused by rickets may need corrective surgery. Children who are referred with a diagnosis of rickets, though occasionally treated, will most often have significant skeletal deformities.
<br></br>
                <br></br>
                <b>Scoliosis</b><br></br>
                Scoliosis is an abnormal curvature of the spine. In scoliosis, the spine curves to the side when viewed from the front, and each vertebra also twists on the next one in a corkscrew fashion. Scoliosis can be caused by a non-structural issue where the spin is normal, but is caused by another issue such as one leg being shorter than the other.
<br></br>
                It can also be structural where the curvature is caused by another disease process, such as a birth defect, muscular dystrophy, metabolic diseases, connective tissue disorders, or Marfan syndrome. Some instances of scoliosis require no treatment, while some may require braces or surgery. Because most reports we receive do not define the degree of curvature, for the purposes of the Waiting Child Profile:
<br></br>
                A slight curvature is defined as a defect that does not appear to affect the child’s spinal structure.  From a visual standpoint, the curvature is not evident through the child’s clothing.
                A significant curvature is defined as being apparent that the child will most likely require surgery and the spine and thorax are significantly deformed.  For these children, the curvature is apparent when the child is dressed.
<br></br>
                <br></br>
                <b>Short/Webbed Neck</b><br></br>
                Short/webbed neck, or pterygium colli deformity, is a congenital fold that runs along the sides of the neck down to the shoulders. On babies, webbed neck may look like loose folds of skin on the neck. As the child grows, the skin may stretch out to look like there is little or no neck.  It can be a feature of Turner syndrome and Noonan syndrome, as well as the rarer Klippel-Feil syndrome.
<br></br>
                <br></br>
                <b>Underdevelopment/Maldevelopment of a limb</b><br></br>
                This indicates any level of limb difference aside from complete absence. Most often these children will have at least half of the limb that is underdeveloped. It can be characterized as missing the lower portion of an arm or leg or underdevelopment or absence of a hand or foot.
<br></br>
                <br></br>
                <b>Sensory</b>
<br></br>
                <br></br>
                <b>Hearing Loss</b><br></br>
                Hearing loss refers to all hearing issues, including deafness. Hearing impairment can be caused by a variety of reasons, including:
<br></br>
                Congenital defect<br></br>
                Disease<br></br>
                Environmental causes<br></br>
                Depending on the underlying cause, some types of hearing impairment can be corrected with hearing aids, surgery, or other therapies. If the individual suffers from complete deafness, many therapies and learning techniques such as Sign Language, lip reading, and animal assistance programs, are available to help the individual to be independent. Often with only minor aid, individuals with hearing impairment can live full and successful lives.
<br></br>
                <br></br>
                <b>Vision Impairment</b><br></br>
                Vision impairment is a very broad category that covers any vision issue which has not caused vision loss in the child. Typical vision impairments include:
<br></br>
                Mild or corrected cataracts<br></br>
                Ptosis (drooping eyelids)<br></br>
                Strabismus (crossed-eyes)<br></br>
                Ambylopia (lazy-eye)<br></br>
                These conditions would be considered correctable or manageable with minimal intervention.<br></br>
                <br></br>
                <b>Vision Loss</b><br></br>
                Visions Loss includes any level of explained or unexplained vision loss. Typical diagnoses seen would include:
<br></br>
                Glaucoma (increased eye pressure)<br></br>
                Severe cataracts<br></br>
                Microphthalmia (abnormally small eyeball)<br></br>
                Atrophy of the eye (one or both)<br></br>
                If the individual has complete blindness, many therapies and learning techniques, such as Braille and animal assistance programs, are available to help the individual to be independent. Often with only minor aid, individuals with vision impairment can live full and successful lives.
<br></br>
                <br></br>
                <b>Skin Conditions</b>
<br></br>
                <br></br>

                <b>Albinism</b><br></br>
                Albinism is a recessive genetic condition characterized by reduction or complete lack of pigment in the skin, hair, or eyes. There are several types of albinism that have different characteristics, but the most common characteristics are very light skin, white to light blonde hair, and light eye color ranging from light blue to purple.
<br></br>
                Physical characteristics may vary depending on the individual and type of albinism. Individuals with albinism lack protection from UV rays and are susceptible to sun burns, skin cancer, and other skin problems. The eyes are also greatly affected by albinism. Individuals with albinism usually suffer from eye conditions ranging from mild nearsightedness to complete blindness.
<br></br>
                Albinism itself is incurable, but sometimes eye and skin issues associated with albinism can be corrected with UV protection, corrective lenses, or surgery. With proper care, this condition is generally not life threatening, and individuals with albinism can live long, productive lives.
<br></br>
                <br></br>
                <b>Ichthyosis</b><br></br>
                Ichthyosis is an inherited skin disorder that causes dead skin cells to accumulate in thick, dry scales on the skin’s surface. It occurs when the production of skin cells is too fast or the skin’s natural shedding process is too slow. These scales can be present at birth, but usually first appear in early childhood.
<br></br>
                Though most cases are mild, some cases of ichthyosis can be severe. No cure has been found and treatments are directed at controlling the signs and symptoms. Treatment can include prescription creams and ointments that contain alpha hydroxyl acids, such as lactic acids and glycolic acids. These chemicals help control the scaling and increase skin moisture.
<br></br>
                In severe cases, the doctor may prescribe retinoids—medications derived from vitamin A. They reduce the production of skin cells. It is best for individuals with ichthyosis to live in warmer climates.
<br></br>
                <br></br>
                <b>Nevus/Hairy Nevus</b><br></br>
                Nevus/hairy nevus is an overgrowth of skin pigment on the skin surface. A large nevus is typically classified as anything over 20cm. If a child is diagnosed with a nevus/hairy nevus as their only special need, these children are likely to have a large nevus.
<br></br>
                While some nevi can be treated with laser treatment or simple outpatient surgery, larger nevi can require all layers of skin to be removed where the nevus is located. Removal can involve a grafting and/or stretching.
<br></br>
                Skin stretching involves balloons being inserted under the skin that are gradually filled to stretch the “good skin.” The nevus is removed, and the stretched skin is put in its place. The lifetime risk for malignant degeneration in a large congenital nevus is approximately 6 percent.
<br></br>
                <br></br>
                <b>Urogenital</b>
<br></br>
                <br></br>
                <b>Anorchism</b><br></br>
                Anorchism is the absence of one or both testes. Generally, if one testicle is absent, the other can be found in the abdominal cavity. Although the testes are absent, the male genitalia are otherwise normal. This suggests that there was normal testicular function in early fetal life and normal male differentiation took place. The testes are presumed, therefore, to have regressed for some reason.
<br></br>
                Torsion of the testes (twisting) in fetal life has been suggested as a cause. In the long term, the boys will need male sex hormone replacement. The introduction of testosterone pre-pubertally would need some age limitations. The defined onset of puberty in males occurs around the age of 11.5 years old.
<br></br>
                As a result, a very low dose of testosterone could be given at around 10 years of age, gradually increasing the dosage schedule. This would, in part, mimic the changes that occur in normal boys. In adulthood, testosterone preparations can be used as capsules, intramuscular injections, skin patches, subcutaneous pellets, gel, or cream. Testicular prostheses should be considered pre-pubertally to overcome psychological problems related to anorchia.
<br></br>
                <br></br>
                <b>Cryptorchidism</b><br></br>
                Cryptorchidism refers to one or both of the testes being undescended. This occurs when one or both testicles fail to move into the scrotum before birth. Usually, the testicle will descend into the scrotum without any intervention during the first year of life.
<br></br>
                If this does not occur, the child may receive hormone injections (B-HCG or testosterone) to try to bring the testicle into the scrotum. Surgery (orchiopexy) is the main treatment. Earlier surgery may prevent irreversible damage to the testicles. This damage can cause infertility. Most cases improve on their own, without any treatment. Medical or surgical correction of the condition is usually successful.
<br></br>
                <br></br>
                <b>Funicular Hydrocele</b><br></br>
                A Funicular Hydrocele is a collection of fluid along the spermatic cord. This is usually treated surgically and poses no long-term issues for the child.
<br></br>
                <br></br>
                <b>Hermaphroditism</b><br></br>
                This is defined as a group of conditions where there is a discrepancy between the external genitals and the internal genitals (testes and ovaries). In general, this will refer to a child who has a chromosomal abnormality. Often, we see children who have malformed genitalia mislabeled as hermaphrodites.
<br></br>
                <br></br>
                <b>Hypospadias</b><br></br>
                Hypospadias is a somewhat common birth (congenital) defect in which the opening of the urethra is on the underside, rather than at the end, of the penis. The condition varies in severity. In most cases, the opening of the urethra is located near the tip of the penis on the underside. More severe forms of hypospadias occur when the opening is at the midshaft or base of the penis. Occasionally, the opening is located in or behind the scrotum.  For the purposes of the application, the severity is defined as follows:
<br></br>
                Mild: Mild hypospadias is defined as typical appearance of genitalia and mild misplacement of the urethra. In some occasions, the scrotum will be split, however the overall structure of the penis appears normal.<br></br>
                Severe: Severe hypospadias may include significant misplacement of the urethra causing further structural deformities of the penis and scrotum. These children may also be classified as having more ambiguous genitalia.<br></br>
                <br></br>
                <b>Imperforate Anus</b><br></br>
                Imperforate anus is a congenital (present from birth) defect in which the opening to the anus is missing or blocked. The rectum may end in a blind pouch that does not connect with the colon. Or, it may have openings to the urethra, bladder, base of penis or scrotum in boys, or vagina in girls.
<br></br>
                A condition of stenosis (narrowing) of the anus or absence of the anus may be present. With treatment, the outcome is usually good. However, it depends on the exact problem. Some infants may never develop adequate bowel control.
<br></br>
                <br></br>
                <b>Incontinence</b><br></br>
                Incontience is the inability to control the bladder, bowels, or both. It can be caused by spinal injury (spina bifida), nerve disorders, prolapse or any other urogenital disorders. It may be treatable with therapy, depending on the cause.
<br></br>
                <br></br>
                <b>Rectovaginal Fistula</b><br></br>
                Rectovaginal Fistula is an abnormal connection between the lower portion of the large intestine, the rectum, and the vagina. This can be associated with imperforate anus in girls, as well as complications from other surgeries, cancer, or Chron’s disease.
<br></br>
                Symptoms include the passing of gas or stool from the vagina, irritation, urinary tract infections, and a foul smelling discharge. Treatment for a rectovaginal fistula depends on its cause, size, location and effect on surrounding tissues. Sometimes fistulas heal on their own, but most people need surgery to close or repair the abnormal connection.
<br></br>
                <br></br>
                <b>Ambiguous/Underdeveloped Genitalia</b><br></br>
                Ambiguous or underdeveloped genitalia refers to any genital malformation that does not include a chromosomal abnormality. Ambiguous genitalia may include an enlarged clitoris or concealment of the vagina in girls and severe hypospadias or an abnormally small penis in boys. Treatment may include reconstructive surgery or hormone replacement.
<br></br>
                <br></br>
                <b>Vascular</b>
<br></br>
                <br></br>
                <b>Capillary Malformation (Port Wine Stain)</b><br></br>
                A capillary malformation (CM) is a flat, sharply demarcated, red-pink vascular stain of the skin. These can be located anywhere on the body.
<br></br>
                If the CM is located on the child’s face, especially near the eyes or forehead, the child could have vascular abnormalities of the eye and brain, called Sturge-Weber syndrome. Sturge-Weber is characterized by possible seizures, glaucoma or other vision issues, and sometimes cognitive delays. CMs overlying the spinal column can be associated with a spinal vascular abnormality (Cobb syndrome). CMs can overlie a deeper vascular abnormality involving arteries, veins, or lymphatics, and often there is overgrowth of the involved tissues.
<br></br>
                Treatment is typically laser therapy.
<br></br>
                <br></br>
                <b>Hemangioma</b><br></br>
                A hemangioma is an abnormal buildup of blood vessels in the skin or internal organs. Most hemangiomas do not require treatment.  However, if the hemangioma is on the face, it may interfere with vision, in which case efforts would be made to remove it.
<br></br>
                Complications could include difficulty breathing, bleeding, vision issues, or infections, depending on the location of the hemangioma. If a child has a diagnosis of hemangioma, it is likely the hemangioma will be and/or interfering.  If the hemangioma is smaller or fairly insignificant, it is unlikely the child would be referred through the Waiting Child program, unless the child also had a secondary diagnosis.
<br></br>
                <br></br>
                <b>Lymphangioma</b><br></br>
                Lymphangioma is a rare, benign, congenital disorder in which a blockage in the lymphatic system causes fluid to accumulate in bubbles beneath the skin. Lymphangiomas can occur anywhere in the skin and the mucous membranes. The most common sites are the head and the neck, followed by the proximal extremities, the buttocks, and the trunk. However, they sometimes can be found in the intestines, the pancreas, and the mesentery.
<br></br>
                Since they have no chance of becoming malignant, lymphangiomas are usually treated for cosmetic reasons only.</p>
            </CardContent>
          </IntroItem>

          <TabItem>
            <PageTabs
              category="Event"
              posts={this.state.posts}
              updatePosts={this.updatePosts}
            />
          </TabItem>
        </Grid>
        <BottomNavSpacer />
        <BottomNav />
      </main>
    );
  }
}

export default Education;

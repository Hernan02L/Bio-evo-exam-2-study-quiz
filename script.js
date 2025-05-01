// ========== LECTURE 10 QUESTIONS (COMPLETE) ==========
const lecture10Questions = [
    // Question 1
    {
        lecture: "10",
        type: "mcq",
        question: "What is significant about the Cambrian Explosion?",
        choices: ["Dinosaur extinction", "Rise of mammals", "Appearance of modern animal phyla", "Origin of plants"],
        answer: 2,
        explanation: "Marked the sudden appearance of most major animal phyla in the fossil record."
    },
    
    // Question 2
    {
        lecture: "10",
        type: "mcq",
        question: "When did dinosaurs first appear on Earth?",
        choices: ["Cambrian Period (~540 mya)", "Triassic Period (~230 mya)", "Jurassic Period (~200 mya)", "Cretaceous Period (~145 mya)"],
        answer: 1,
        explanation: "Dinosaurs emerged during the Triassic Period (~230 mya)."
    },
    
    // Question 3
    {
        lecture: "10",
        type: "mcq",
        question: "What caused the mass extinction event 250 million years ago (mya)?",
        choices: ["Asteroid impact", "Volcanic activity", "Climate change", "All of the above"],
        answer: 3,
        explanation: "Permian-Triassic extinction caused by Siberian Traps volcanic eruptions."
    },
    
    // Question 4
    {
        lecture: "10",
        type: "multi-select",
        question: "What features characterize the ornithischia? (Select all)",
        choices: ["Bird-hipped pelvis", "Herbivorous diet", "Beak-like mouth", "Quadrupedal stance"],
        answers: [0, 1, 2, 3],
        explanation: "Ornithischians were herbivorous dinosaurs with bird-like hips and beaks."
    },
    
    // Question 5
    {
        lecture: "10",
        type: "multi-select",
        question: "What features characterize the sauropodomorpha? (Select all)",
        choices: ["Long necks", "Small heads", "Carnivorous diet", "Quadrupedal stance"],
        answers: [0, 1, 3],
        explanation: "Sauropodomorphs were long-necked herbivores with small heads."
    },
    
    // Question 6 (NEW)
    {
        lecture: "10",
        type: "multi-select",
        question: "What features characterize the theropoda? (Select all)",
        choices: ["Hollow bones", "Carnivorous diet", "Three-toed limbs", "Quadrupedal stance"],
        answers: [0, 1, 2],
        explanation: "Theropods were bipedal carnivores with hollow bones and three-toed limbs."
    },
    
    // Question 7
    {
        lecture: "10",
        type: "mcq",
        question: "What do Sinosauropteryx fossils tell us about feather evolution?",
        choices: ["Feathers evolved for flight", "Proto-feathers predate birds", "Feathers are unique to birds", "All of the above"],
        answer: 1,
        explanation: "Show evidence of proto-feathers in non-avian dinosaurs."
    },
    
    // Question 8 (NEW)
    {
        lecture: "10",
        type: "mcq",
        question: "What do Similicaudipteryx fossils tell us about feather evolution?",
        choices: ["Feathers changed with age", "Only adults had feathers", "Feathers were for display", "No feather evidence"],
        answer: 0,
        explanation: "Show different feather types in juvenile vs adult specimens."
    },
    
    // Question 9
    {
        lecture: "10",
        type: "mcq",
        question: "What does the term exaptation mean?",
        choices: ["Trait loss", "Trait co-opted for new function", "Genetic mutation", "Evolutionary mismatch"],
        answer: 1,
        explanation: "Exaptation: Existing trait adapted for new purpose (e.g., feathers for insulation later used for flight)."
    },
    
    // Question 10
    {
        lecture: "10",
        type: "mcq",
        question: "What caused the mass extinction event 65 mya?",
        choices: ["Volcanic eruptions", "Asteroid impact", "Both", "Neither"],
        answer: 2,
        explanation: "Cretaceous-Paleogene extinction caused by Chicxulub asteroid and Deccan Traps volcanism."
    }
];
// ========== LECTURE 11 QUESTIONS ==========
const lecture11Questions = [
    // Question 1
    {
        lecture: "11",
        type: "mcq",
        question: "To which other mammalian groups are primates most closely related?",
        choices: ["Rodents", "Bats", "Tree shrews and colugos", "Cetaceans"],
        answer: 2,
        explanation: "Primates' closest relatives are tree shrews (Scandentia) and colugos (Dermoptera)."
    },

    // Question 2
    {
        lecture: "11",
        type: "shortanswer",
        question: "What do Purgatorius fossils tell us about early primate evolution?",
        keywords: ["early primate ancestor", "arboreal adaptation", "Cretaceous period", "insectivorous diet"],
        explanation: "Purgatorius shows adaptations for tree-dwelling life and insectivory in the late Cretaceous (~66 mya)."
    },

    // Question 3 (Seven Traits)
    {
        lecture: "11",
        type: "multi-select",
        question: "Which traits characterize primates? (Select all that apply)",
        choices: [
            "Opposable thumbs/toes",
            "Forward-facing eyes",
            "Postorbital bar",
            "Large brain-to-body ratio",
            "Rhinarium (wet nose)",
            "Color vision",
            "Single offspring per pregnancy"
        ],
        answers: [0, 1, 2, 5, 6],
        explanation: "Primates lack rhinarium and have variable brain sizes. Key traits: opposable digits, binocular vision, postorbital closure."
    },

    // Question 4 (Prosimians)
    {
        lecture: "11",
        type: "multi-select",
        question: "Which characterize prosimians? (Select all)",
        choices: [
            "Include lemurs and tarsiers",
            "Mostly nocturnal",
            "Have rhinaria",
            "Found only in Africa"
        ],
        answers: [0, 1, 2],
        explanation: "Prosimians: lemurs, lorises, tarsiers. Mostly nocturnal with wet noses (rhinaria)."
    },

    // Question 5 (New/Old World Monkeys)
    {
        lecture: "11",
        type: "multi-select",
        question: "Features distinguishing New World vs Old World Monkeys? (Select all)",
        choices: [
            "Prehensile tails (NW)",
            "Downward-facing nostrils (OW)",
            "Ischial callosities (OW)",
            "36 teeth (NW)"
        ],
        answers: [0, 1, 2],
        explanation: "New World: flat noses, prehensile tails. Old World: downward nostrils, ischial callosities."
    },

    // Question 6 (Apes)
    {
        lecture: "11",
        type: "multi-select",
        question: "Which characterize apes? (Select all)",
        choices: [
            "No tail",
            "Y-5 molar pattern",
            "Brachiation",
            "Quadrupedal locomotion"
        ],
        answers: [0, 1, 2],
        explanation: "Apes lack tails, have Y-5 molars, and some brachiate (swing arm-over-arm)."
    },

    // Question 7 (Teeth/Digestion)
    {
        lecture: "11",
        type: "mcq",
        question: "How do primate teeth reflect their diet?",
        choices: [
            "Sharp carnassials for meat",
            "Generalized teeth for varied diet",
            "Hypsodont teeth for grass",
            "No canines"
        ],
        answer: 1,
        explanation: "Primates have unspecialized teeth adapted for omnivorous diets (fruits, leaves, insects)."
    },

    // Question 8 (Ape Diet)
    {
        lecture: "11",
        type: "mcq",
        question: "What does the diet of most apes primarily consist of?",
        choices: ["Meat", "Fruit", "Grass", "Insects"],
        answer: 1,
        explanation: "Most apes are frugivores, though some supplement with leaves/insects (e.g., gorillas)."
    },

    // Question 9 (Ethanol Metabolism)
    {
        lecture: "11",
        type: "mcq",
        question: "How do primates metabolize ethanol?",
        choices: [
            "Alcohol dehydrogenase",
            "Lactase persistence",
            "Amylase",
            "Pepsin"
        ],
        answer: 0,
        explanation: "Ethanol is broken down by alcohol dehydrogenase (ADH4 enzyme)."
    },

    // Question 10 (Ethanol Selection)
    {
        lecture: "11",
        type: "shortanswer",
        question: "Why might improved ethanol metabolism have been selected for in apes?",
        keywords: ["fermented fruit", "food scarcity", "energy source", "dietary adaptation"],
        explanation: "Allowed consumption of fermented fruit as fallback food during shortages, providing calories."
    }
];
// ========== LECTURE 12 QUESTIONS ==========
const lecture12Questions = [
    // Question 1
    {
        lecture: "12",
        type: "mcq",
        question: "Why is it incorrect to say humans evolved from chimpanzees?",
        choices: [
            "Chimps are more evolved",
            "We share a common ancestor",
            "Humans evolved first",
            "No genetic relationship"
        ],
        answer: 1,
        explanation: "Humans and chimps diverged from a common ancestor ~6-7 mya."
    },

    // Question 2
    {
        lecture: "12",
        type: "multi-select",
        question: "How do humans differ from other apes? (Select all)",
        choices: [
            "Obligate bipedalism",
            "Larger brain-to-body ratio",
            "Protruding chin",
            "Shorter developmental period",
            "Tool dependency"
        ],
        answers: [0, 1, 2, 4],
        explanation: "Humans: bipedal, large brains, chins, and reliance on tools."
    },

    // Question 3
    {
        lecture: "12",
        type: "multi-select",
        question: "What characterizes the genus Homo? (Select all)",
        choices: [
            "Brain size >600 cc",
            "Obligate bipedalism",
            "Complex tool use",
            "Quadrupedal locomotion"
        ],
        answers: [0, 1, 2],
        explanation: "Homo: large brains, full bipedalism, and advanced toolmaking."
    },

    // Question 4
    {
        lecture: "12",
        type: "shortanswer",
        question: "What does the 'Out of Africa' hypothesis propose?",
        keywords: ["modern humans", "african origin", "dispersal", "replace archaic humans"],
        explanation: "Proposes Homo sapiens evolved in Africa ~300kya and spread globally, replacing archaic humans."
    },
    {
        lecture: "12",
        type: "multi-select",
        question: "What supports the 'Out of Africa' model? (Select all)",
        choices: [
            "Mitochondrial DNA diversity in Africa",
            "Fossil record showing gradual transitions outside Africa",
            "Neanderthal DNA in non-Africans",
            "Oldest Homo sapiens fossils in Africa"
        ],
        answers: [0, 3],
        explanation: "Support: African genetic diversity and oldest fossils (e.g., Jebel Irhoud)."
    },

    // Question 5
    {
        lecture: "12",
        type: "mcq",
        question: "How are Homo sapiens related to Neanderthals/Denisovans?",
        choices: [
            "Direct ancestors",
            "Sister species with interbreeding",
            "Completely separate lineages",
            "Descendants of each other"
        ],
        answer: 1,
        explanation: "Interbred during Eurasian migrations (~60kya)."
    },

    // Question 6
    {
        lecture: "12",
        type: "mcq",
        question: "What is the Neanderthal genetic contribution to modern humans?",
        choices: [
            "0% (no interbreeding)",
            "1-4% in non-Africans",
            "10-20% in Africans",
            "50% globally"
        ],
        answer: 1,
        explanation: "Non-Africans retain 1-4% Neanderthal DNA from hybridization."
    },

    // Question 7
    {
        lecture: "12",
        type: "mcq",
        question: "What do mitochondrial DNA studies reveal about human origins?",
        choices: [
            "Multiple regional origins",
            "Recent African origin (~200kya)",
            "Equal diversity globally",
            "No clear pattern"
        ],
        answer: 1,
        explanation: "Mitochondrial Eve traces to Africa ~200kya."
    }
];
// ========== LECTURE 12 FOSSIL QUESTIONS ==========
const lecture12FossilQuestions = [
    // Sahelanthropus tchadensis
    {
        lecture: "12",
        type: "mcq",
        question: "What is significant about Sahelanthropus tchadensis?",
        choices: [
            "7-6 mya: Earliest potential biped (foramen magnum position)",
            "4.4 mya: First evidence of stone tools",
            "2 mya: Direct ancestor of Neanderthals",
            "10 mya: Last common ancestor with orangutans"
        ],
        answer: 0,
        explanation: "Dated to 7-6 mya, shows possible bipedalism through forward-positioned foramen magnum."
    },

    // Orrorin tugenensis
    {
        lecture: "12",
        type: "mcq",
        question: "Why is Orrorin tugenensis important?",
        choices: [
            "6.2-5.8 mya: Femur suggests bipedalism",
            "3.9 mya: First Australopithecus",
            "1.8 mya: Controlled fire user",
            "4.4 mya: Complete skeleton found"
        ],
        answer: 0,
        explanation: "Orrorin's 6 mya femur shows possible bipedal adaptation."
    },

    // Ardipithecus kadabba
    {
        lecture: "12",
        type: "mcq",
        question: "What does Ardipithecus kadabba tell us?",
        choices: [
            "5.8-5.2 mya: Early bipedal adaptations",
            "7 mya: First hominin with large brain",
            "3.2 mya: Creator of Oldowan tools",
            "2.5 mya: First Homo species"
        ],
        answer: 0,
        explanation: "Shows early bipedal features from 5.8 mya in toe bone structure."
    },

    // Ardipithecus ramidus ("Ardi")
    {
        lecture: "12",
        type: "mcq",
        question: "Why is Ardi (Ardipithecus ramidus) significant?",
        choices: [
            "4.4 mya: Shows both arboreal and bipedal traits",
            "3.3 mya: First evidence of art",
            "1.5 mya: Controlled fire use",
            "6 mya: Earliest stone tools"
        ],
        answer: 0,
        explanation: "Ardi's 4.4 mya skeleton reveals transitional features between climbing and walking."
    },

    // Australopithecus anamensis
    {
        lecture: "12",
        type: "mcq",
        question: "What characterizes Australopithecus anamensis?",
        choices: [
            "4.2-3.9 mya: Transitional between Ardipithecus and later Australopithecus",
            "2.5 mya: First member of genus Homo",
            "3.6 mya: Laetoli footprint maker",
            "5.8 mya: Earliest known hominin"
        ],
        answer: 0,
        explanation: "Shows intermediate features between earlier and later australopiths."
    },

    // Australopithecus afarensis ("Lucy")
    {
        lecture: "12",
        type: "mcq",
        question: "Why is Lucy (A. afarensis) important?",
        choices: [
            "3.9-2.9 mya: Definitive biped with ape-like upper body",
            "4.4 mya: First evidence of tool use",
            "1.8 mya: First hominin out of Africa",
            "6 mya: Earliest known hominin"
        ],
        answer: 0,
        explanation: "Lucy's skeleton (3.2 mya) and Laetoli footprints confirm habitual bipedalism."
    },

    // Homo erectus
    {
        lecture: "12",
        type: "mcq",
        question: "What is significant about Homo erectus?",
        choices: [
            "1.9 mya-110kya: First to migrate out of Africa",
            "500kya: Invented complex language",
            "200kya: Direct ancestor of Neanderthals only",
            "4 mya: First bipedal hominin"
        ],
        answer: 0,
        explanation: "H. erectus spread globally, used fire, and made Acheulean tools."
    }
];
// ========== LECTURE 13 QUESTIONS ==========
const lecture13Questions = [
    // Question 1
    {
        lecture: "13",
        type: "multi-select",
        question: "Which are key differences between human and chimp brains? (Select 3)",
        choices: [
            "Larger prefrontal cortex",
            "More folded cerebral cortex",
            "Faster neuron transmission",
            "Smaller cerebellum",
            "Different neuron distribution"
        ],
        answers: [0, 1, 4],
        explanation: "Humans have larger prefrontal areas, more cortical folding, and unique neuron organization."
    },

    // Question 2
    {
        lecture: "13",
        type: "mcq",
        question: "How does human brain development differ from chimps?",
        choices: [
            "Longer childhood for brain growth",
            "Faster myelination at birth",
            "Complete by age 5",
            "No difference"
        ],
        answer: 0,
        explanation: "Humans have extended developmental periods allowing prolonged learning."
    },

    // Question 3
    {
        lecture: "13",
        type: "multi-select",
        question: "Costs/benefits of large brains? (Select all)",
        choices: [
            "Increased energy needs (20% of calories)",
            "Enhanced problem-solving",
            "Risk during childbirth",
            "Improved night vision",
            "Tool-making capabilities"
        ],
        answers: [0, 1, 2, 4],
        explanation: "Costs: high energy, birth risks. Benefits: cognition, tool use."
    },

    // Question 4
    {
        lecture: "13",
        type: "shortanswer",
        question: "What is gene-culture coevolution in brain development?",
        keywords: ["feedback loop", "cultural practices", "genetic changes", "selection pressure"],
        explanation: "Cultural innovations (e.g., cooking) allowed/selected for genetic changes enabling larger brains."
    },

    // Question 5
    {
        lecture: "13",
        type: "mcq",
        question: "How might climate drive brain expansion?",
        choices: [
            "Unstable environments favored adaptability",
            "Cold temperatures required insulation",
            "Arid climates reduced food needs",
            "No connection"
        ],
        answer: 0,
        explanation: "Environmental instability may have selected for cognitive flexibility."
    },

    // Question 6
    {
        lecture: "13",
        type: "mcq",
        question: "What does HARE5 regulation of FZD8 suggest?",
        choices: [
            "Human enhancers increase neuron production",
            "Chimp genes grow larger brains",
            "No functional difference",
            "Affects muscle development"
        ],
        answer: 0,
        explanation: "Human HARE5 boosts FZD8 activity, increasing cortical neurons."
    },

    // Question 7
    {
        lecture: "13",
        type: "shortanswer",
        question: "How is language defined?",
        keywords: ["symbolic", "syntax", "displacement", "productivity"],
        explanation: "Language: symbolic communication with grammar, ability to discuss abstract concepts."
    },

    // Question 8
    {
        lecture: "13",
        type: "multi-select",
        question: "Evidence of nonhuman primate language? (Select all)",
        choices: [
            "Vervet monkey alarm calls",
            "Kanzi's lexigram use",
            "Chimp sign language",
            "Perfect human speech",
            "Written symbols"
        ],
        answers: [0, 1, 2],
        explanation: "Primates show basic symbolic communication but lack complex syntax."
    },

    // Question 9
    {
        lecture: "13",
        type: "mcq",
        question: "Why can't apes speak like humans?",
        choices: [
            "Larynx position & neural control",
            "Lack of intelligence",
            "No desire to communicate",
            "Short tongues"
        ],
        answer: 0,
        explanation: "Anatomical differences (high larynx) + limited neural circuitry for speech."
    },

    // Question 10
    {
        lecture: "13",
        type: "mcq",
        question: "Could Neanderthals speak like humans?",
        choices: [
            "Yes: FOXP2 gene & hyoid bone evidence",
            "No: No language capacity",
            "Only sign language",
            "Unrelated to humans"
        ],
        answer: 0,
        explanation: "Neanderthals shared FOXP2 variants and had hyoid bones for speech."
    },

    // Question 11
    {
        lecture: "13",
        type: "mcq",
        question: "What do FOXP2 studies reveal?",
        choices: [
            "Critical for speech/language development",
            "Controls muscle growth",
            "Unique to humans",
            "No known function"
        ],
        answer: 0,
        explanation: "FOXP2 regulates speech-related genes; mutations cause language disorders."
    },

    // Question 12
    {
        lecture: "13",
        type: "mcq",
        question: "Link between language and tool-making?",
        choices: [
            "Complex tools require teaching via language",
            "No connection",
            "Tools replace language",
            "Only modern humans link them"
        ],
        answer: 0,
        explanation: "Advanced toolmaking (e.g., Acheulean) likely required verbal instruction."
    }
];
// ========== LECTURE 14 QUESTIONS ==========
const lecture14Questions = [
    // Question 1
    {
        lecture: "14",
        type: "mcq",
        question: "What is lactose and how do mammals typically digest it?",
        choices: [
            "A protein broken down by pepsin",
            "A carbohydrate digested by lactase enzyme",
            "A fat processed by lipases",
            "A mineral absorbed directly"
        ],
        answer: 1,
        explanation: "Lactose is a disaccharide sugar digested by lactase into glucose + galactose."
    },

    // Question 2
    {
        lecture: "14",
        type: "mcq",
        question: "How long does lactase function in nonhuman mammals?",
        choices: [
            "Throughout life",
            "Only during infancy",
            "Only in old age",
            "Only during pregnancy"
        ],
        answer: 1,
        explanation: "Nonhuman mammals stop producing lactase after weaning."
    },

    // Question 3
    {
        lecture: "14",
        type: "multi-select",
        question: "Select the correct definitions:",
        choices: [
            "Lactose intolerance: Inability to digest milk sugar as adults",
            "Lactase persistence: Continued lactase production into adulthood",
            "Lactose intolerance: Allergy to milk proteins",
            "Lactase persistence: Ability to digest meat better"
        ],
        answers: [0, 1],
        explanation: "Intolerance = lactase decline; Persistence = retained lactase."
    },

    // Question 4
    {
        lecture: "14",
        type: "mcq",
        question: "Where/when did lactase persistence evolve in humans?",
        choices: [
            "Europe & Africa ~10kya with dairy farming",
            "Asia ~50kya with rice cultivation",
            "Americas ~2kya with maize domestication",
            "Australia ~200 years ago"
        ],
        answer: 0,
        explanation: "Evolved independently in European and African pastoralist populations."
    },

    // Question 5
    {
        lecture: "14",
        type: "mcq",
        question: "What selected for lactase persistence?",
        choices: [
            "Nutritional advantage of dairy consumption",
            "Protection from predators",
            "Cold climate adaptation",
            "Improved vision"
        ],
        answer: 0,
        explanation: "Dairy provided calories, calcium, and hydration in arid regions."
    },

    // Question 6
    {
        lecture: "14",
        type: "shortanswer",
        question: "How is lactase persistence a gene-culture coevolution example?",
        keywords: ["dairy domestication", "genetic mutation", "cultural practice", "selective advantage"],
        explanation: "Cultural innovation (dairying) created selection pressure for genetic mutation (lactase persistence)."
    }
];
// ========== LECTURE 15 QUESTIONS ==========
const lecture15Questions = [
    // Question 1: Coevolution Definition
    {
        lecture: "15",
        type: "shortanswer",
        question: "How do we define coevolution?",
        keywords: ["reciprocal evolution", "species interaction", "ecological relationships", "mutual influence"],
        explanation: "Coevolution: Two or more species reciprocally influence each other's evolutionary trajectories through close ecological interactions (e.g., predator-prey, mutualism)."
    },

    // Question 2: Coevolution Examples
    {
        lecture: "15",
        type: "multi-select",
        question: "Which are examples of coevolution? (Select all)",
        choices: [
            "Human-louse adaptation",
            "Flowering plants and bees",
            "Microbiome-immune system interactions",
            "Lions and zebras"
        ],
        answers: [0, 1, 2, 3],
        explanation: "All are examples: lice/humans (parasitism), plants/bees (mutualism), microbiome (mutualism), lions/zebras (predation)."
    },

    // Question 3: Lice Types
    {
        lecture: "15",
        type: "multi-select",
        question: "Which lice infect humans? (Select all)",
        choices: [
            "Pediculus humanus capitis (head louse)",
            "Pediculus humanus corporis (body louse)",
            "Pthirus pubis (pubic louse)",
            "Pedicinus elegans (chimpanzee louse)"
        ],
        answers: [0, 1, 2],
        explanation: "Three human-specific lice: head, body, and pubic lice."
    },

    // Question 4: Lice and Human Evolution
    {
        lecture: "15",
        type: "shortanswer",
        question: "How have lice studies informed human evolution?",
        keywords: ["clothing timeline", "body hair loss", "DNA divergence", "100kya"],
        explanation: "Body lice evolved ~100kya, indicating when humans began wearing sewn clothing. Head/pubic lice divergence marks body hair loss ~2-3 mya."
    },

    // Question 5/6: Timeline Questions
    {
        lecture: "15",
        type: "mcq",
        question: "When did human ancestors lose body hair?",
        choices: ["5 mya", "2-3 mya", "500kya", "10kya"],
        answer: 1,
        explanation: "Associated with moving to savannas ~2-3 mya (head lice specialization)."
    },
    {
        lecture: "15",
        type: "mcq",
        question: "When did humans start wearing clothing?",
        choices: ["1.5 mya", "100kya", "40kya", "10kya"],
        answer: 1,
        explanation: "Body lice DNA divergence from head lice dates to ~100kya."
    },

    // Question 7: Microbiome Composition
    {
        lecture: "15",
        type: "multi-select",
        question: "What constitutes the human microbiome? (Select all)",
        choices: [
            "Bacteria (e.g., Bacteroides)",
            "Fungi",
            "Viruses",
            "Helminths"
        ],
        answers: [0, 1, 2, 3],
        explanation: "Includes bacteria, fungi, viruses, and sometimes parasitic worms."
    },

    // Question 8: Bacteroides fragilis
    {
        lecture: "15",
        type: "mcq",
        question: "How does Bacteroides fragilis affect the body?",
        choices: [
            "Produces inflammatory cytokines",
            "Generates polysaccharide A (PSA) for immune balance",
            "Destroys gut lining",
            "Inhibits vitamin absorption"
        ],
        answer: 1,
        explanation: "PSA promotes regulatory T-cells to control inflammation."
    },

    // Question 9: Disease Trends
    {
        lecture: "15",
        type: "mcq",
        question: "Trends in diseases over 75 years?",
        choices: [
            "Infections ↗, immune disorders ↘",
            "Infections ↘, immune disorders ↗",
            "Both ↗",
            "No correlation"
        ],
        answer: 1,
        explanation: "Reduced infections correlate with rising autoimmune/allergic diseases (hygiene hypothesis)."
    },

    // Question 10: Hygiene Hypothesis
    {
        lecture: "15",
        type: "shortanswer",
        question: "What does the hygiene hypothesis state?",
        keywords: ["reduced microbial exposure", "immune dysregulation", "autoimmune diseases", "old friends"],
        explanation: "Limited exposure to microbes/parasites in modern environments impairs immune development, increasing allergies/autoimmunity."
    },

    // Question 11: Old Friends
    {
        lecture: "15",
        type: "multi-select",
        question: "Who are the 'Old Friends'? (Select all)",
        choices: [
            "Helminths (parasitic worms)",
            "Gut microbiota (e.g., Bacteroides)",
            "Seasonal flu viruses",
            "Farm animals/soil microbes"
        ],
        answers: [0, 1, 3],
        explanation: "Helminths, mutualistic microbes, and environmental organisms that trained our immune system."
    },

    // Question 12: Helminth-Nervous System
    {
        lecture: "15",
        type: "mcq",
        question: "Effect of long-term helminth infection?",
        choices: [
            "Triggers neurodegeneration",
            "Reduces neuroinflammation via IL-10",
            "Causes paralysis",
            "No effect"
        ],
        answer: 1,
        explanation: "Helminths promote anti-inflammatory cytokines (e.g., IL-10) that may protect against MS."
    },

    // Question 13: Helminth Therapy
    {
        lecture: "15",
        type: "shortanswer",
        question: "How does helminth therapy work?",
        keywords: ["regulatory T-cells", "IL-10", "immune modulation", "parasite-derived molecules"],
        explanation: "Helminths secrete molecules that boost regulatory T-cells and anti-inflammatory cytokines (IL-10), suppressing autoimmune responses."
    }
];// ========== LECTURE 16 QUESTIONS ==========
const lecture16Questions = [
    // Question 1: UV Radiation & Latitude
    {
        lecture: "16",
        type: "shortanswer",
        question: "How do ultraviolet radiation levels vary with latitude?",
        keywords: ["highest at equator", "decreases toward poles", "high altitude/arid regions"],
        explanation: "UV radiation is most intense at the equator and diminishes at higher latitudes. Arid/high-altitude regions also experience elevated UV exposure."
    },

    // Question 2: Vitamin D Synthesis
    {
        lecture: "16",
        type: "mcq",
        question: "How do humans synthesize vitamin D?",
        choices: [
            "UVB converts 7-dehydrocholesterol in skin to pre-vitamin D3",
            "Dietary intake of fish only",
            "UVA activates folate for calcium absorption",
            "Melanin directly produces vitamin D"
        ],
        answer: 0,
        explanation: "UVB rays trigger a photochemical reaction in the skin, converting 7-dehydrocholesterol to pre-vitamin D3, later processed in the liver/kidneys."
    },

    // Question 3: Vitamin D Deficiency
    {
        lecture: "16",
        type: "multi-select",
        question: "Reproductive impacts of vitamin D deficiency? (Select all)",
        choices: [
            "Rickets in children",
            "Pelvic deformities complicating childbirth",
            "Neural tube defects in fetuses",
            "Osteomalacia in adults"
        ],
        answers: [0, 1, 3],
        explanation: "Deficiency causes rickets (bone deformities) and osteomalacia (soft bones), with pelvic issues affecting childbirth (Slide 9-10)."
    },

    // Question 4: Folate Damage
    {
        lecture: "16",
        type: "shortanswer",
        question: "Why is folate damage reproductively significant?",
        keywords: ["DNA synthesis", "fetal development", "neural tube defects", "UVA exposure"],
        explanation: "UVA destroys folate, critical for DNA synthesis. Deficiency during pregnancy increases risks of neural tube defects (Slide 13)."
    },

    // Question 5: Melanocytes
    {
        lecture: "16",
        type: "mcq",
        question: "What role do melanocytes play in skin pigmentation?",
        choices: [
            "Produce melanin to absorb/scatter UV radiation",
            "Synthesize vitamin D directly",
            "Destroy folate under UV exposure",
            "Regulate body temperature"
        ],
        answer: 0,
        explanation: "Melanocytes create melanin in melanosomes, protecting DNA/folate by absorbing UV rays (Slide 17-18)."
    },

    // Question 6: Australopithecines
    {
        lecture: "16",
        type: "mcq",
        question: "What was Australopithecine skin pigmentation?",
        choices: [
            "Light skin covered with dark hair",
            "Dark skin like modern humans",
            "No pigmentation",
            "Seasonally variable"
        ],
        answer: 0,
        explanation: "Early hominins had lightly pigmented skin with protective dark hair, retaining ancestral primate traits (Slide 19)."
    },

    // Question 7: Early Homo
    {
        lecture: "16",
        type: "mcq",
        question: "Skin pigmentation in early Homo?",
        choices: [
            "Dark skin due to equatorial UV exposure",
            "Light skin for vitamin D synthesis",
            "Patchy pigmentation",
            "Identical to chimpanzees"
        ],
        answer: 0,
        explanation: "Hairless Homo in Africa evolved dark skin to protect against intense UV radiation (Slide 20-21)."
    },

    // Question 8: Geographical Variation
    {
        lecture: "16",
        type: "shortanswer",
        question: "Explain geographical skin pigmentation variation.",
        keywords: ["equator UV protection", "polar vitamin D", "folate balance", "melanin compromise"],
        explanation: "Dark skin near the equator protects folate/DNA; lighter skin at higher latitudes allows sufficient vitamin D synthesis (Slide 23-24)."
    },

    // Question 9: Lighter Skin in Females
    {
        lecture: "16",
        type: "multi-select",
        question: "Hypotheses for lighter female skin? (Select all)",
        choices: [
            "Enhanced vitamin D for pregnancy/breastfeeding",
            "Social protection via infant-like appearance",
            "Male preference for lighter skin",
            "Reduced melanocyte activity"
        ],
        answers: [0, 1, 2],
        explanation: "Possible factors: reproductive vitamin D needs, social signaling, or sexual selection (Slide 27)."
    }
];// ========== LECTURE 17 QUESTIONS ==========
const lecture17Questions = [
    // Question 1: Polygenism Definition
    {
        lecture: "17",
        type: "shortanswer",
        question: "What does the concept of polygenism propose?",
        keywords: ["separate evolutionary origins", "biologically distinct races", "inequality justification", "18th-19th century"],
        explanation: "Polygenism proposed that human 'races' evolved independently as distinct biological entities, falsely used to justify racial hierarchies (Slides 6, 8, 11)."
    },

    // Question 2: Polygenism in American Ideology
    {
        lecture: "17",
        type: "shortanswer",
        question: "What role did polygenism play in America's founding ideology?",
        keywords: ["slavery justification", "Thomas Jefferson", "racial inferiority", "biological justification"],
        explanation: "Polygenism was weaponized to rationalize slavery and inequality by framing races as fundamentally different species (Slide 10-11)."
    },

    // Question 3: Lewontin's Research
    {
        lecture: "17",
        type: "mcq",
        question: "What did Richard Lewontin's research show about human variation?",
        choices: [
            "85% of genetic variation exists within populations",
            "50% of variation separates racial groups",
            "No meaningful genetic differences exist"
        ],
        answer: 0,
        explanation: "Lewontin (1972) found 85% of genetic diversity occurs within populations, not between races (Slides 18-20)."
    },

    // Question 4: Mary-Claire King's Research
    {
        lecture: "17",
        type: "mcq",
        question: "What did Mary-Claire King discover about human variation?",
        choices: [
            "Humans and chimps share <90% DNA similarity",
            "All human populations are equally related to chimps",
            "Europeans are genetically closer to chimps"
        ],
        answer: 1,
        explanation: "King (1975) showed all human groups share >99% DNA with chimps, with no population closer than another (Slide 19)."
    },

    // Question 5: Rebecca Cann's Research
    {
        lecture: "17",
        type: "mcq",
        question: "What did Rebecca Cann's mtDNA study reveal?",
        choices: [
            "All humans trace ancestry to Africa",
            "Humans originated in Asia",
            "Multiple independent human origins"
        ],
        answer: 0,
        explanation: "Cann (1987) traced non-African mtDNA to African roots, supporting the 'Out of Africa' model (Slide 20)."
    },

    // Question 6: Genetic Diversity in Populations
    {
        lecture: "17",
        type: "mcq",
        question: "Which population has the most genetic diversity?",
        choices: [
            "Africans",
            "Europeans",
            "Native Americans"
        ],
        answer: 0,
        explanation: "Africans exhibit the highest heterozygosity and private alleles (Slides 21-23, 25)."
    },

    // Question 7: Skin Color & Genetic Variation
    {
        lecture: "17",
        type: "mcq",
        question: "How much genetic variation aligns with skin color?",
        choices: [
            "1%",
            "50%",
            "10%"
        ],
        answer: 0,
        explanation: "Skin color differences (e.g., MC1R gene) account for <1% of total human genetic variation (Slides 26, 28)."
    }
];

// ========== UPDATE MAIN QUESTION ARRAY ==========
const allQuestions = [
    ...lecture10Questions,
    ...lecture11Questions,
    ...lecture12Questions,
    ...lecture13Questions,
    ...lecture14Questions,
    ...lecture15Questions,
    ...lecture16Questions,
    ...lecture17Questions // Added
];
let filteredQuestions = [];
let currentQuestion = 0;
let score = 0;

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// Updated loadQuestion function
function loadQuestion() {
    const q = filteredQuestions[currentQuestion];
    const questionEl = document.getElementById("question");
    const choicesDiv = document.getElementById("choices");
    const feedbackEl = document.getElementById("feedback");
    
    // Clear previous content
    questionEl.textContent = q.question;
    choicesDiv.innerHTML = "";
    feedbackEl.innerHTML = "";
    feedbackEl.className = "feedback-box";

    // Handle different question types
    switch(q.type) {
        case "mcq":
            q.choices.forEach((choice, index) => {
                const btn = document.createElement("button");
                btn.className = "choice-btn";
                btn.textContent = choice;
                btn.onclick = () => checkAnswer(index, btn);
                choicesDiv.appendChild(btn);
            });
            break;

        case "multi-select":
            q.choices.forEach((choice, index) => {
                const container = document.createElement("div");
                container.className = "multi-choice";
                
                const checkbox = document.createElement("input");
                checkbox.type = "checkbox";
                checkbox.id = `choice-${index}`;
                checkbox.value = index;
                
                const label = document.createElement("label");
                label.htmlFor = `choice-${index}`;
                label.textContent = choice;
                
                container.appendChild(checkbox);
                container.appendChild(label);
                choicesDiv.appendChild(container);
            });
            break;

        case "shortanswer":
            const textarea = document.createElement("textarea");
            textarea.className = "short-answer-input";
            textarea.placeholder = "Type your answer here...";
            choicesDiv.appendChild(textarea);
            break;
    }

    document.getElementById("next-btn").style.display = "none";
    updateProgress();
}

// Add this CSS to your style.css
.multi-choice {
    margin: 10px 0;
    padding: 10px;
    background: #f8f9fa;
    border-radius: 8px;
}

.multi-choice input[type="checkbox"] {
    margin-right: 10px;
    transform: scale(1.2);
}

.short-answer-input {
    width: 100%;
    height: 100px;
    padding: 10px;
    margin-top: 15px;
    border: 2px solid #ddd;
    border-radius: 8px;
    resize: vertical;
    font-family: inherit;
    font-size: 16px;
}

function checkAnswer(selected, buttonEl) {
    const q = filteredQuestions[currentQuestion];
    const feedback = document.getElementById("feedback");
    const buttons = document.querySelectorAll(".choice-btn");
    
    buttons.forEach((btn, idx) => {
        btn.disabled = true;
        if (idx === q.answer) btn.classList.add("correct");
    });

    if (selected === q.answer) {
        score++;
        feedback.textContent = `✅ Correct! ${q.explanation}`;
        feedback.style.color = "green";
    } else {
        buttonEl.classList.add("incorrect");
        feedback.innerHTML = `<span style='color:red'>❌ Incorrect.</span> ${q.explanation}`;
    }

    feedback.classList.add("show");
    document.getElementById("score").textContent = score;
    document.getElementById("next-btn").style.display = "inline-flex";
}

function nextQuestion() {
    currentQuestion++;
    if (currentQuestion < filteredQuestions.length) {
        loadQuestion();
    } else {
        document.getElementById("quiz-box").innerHTML = `
            <h2>Quiz Complete!</h2>
            <p>Your score: ${score}/${filteredQuestions.length}</p>
            <button onclick="resetQuiz()" class="btn-primary">
                <i class="fas fa-redo"></i> Try Again
            </button>
        `;
    }
}

function resetQuiz() {
    currentQuestion = 0;
    score = 0;
    filterQuestions();
}

function filterQuestions() {
    const selected = document.getElementById("lecture-select").value;
    filteredQuestions = selected === "all" 
        ? shuffle([...allQuestions]) 
        : shuffle(allQuestions.filter(q => q.lecture === selected));
    currentQuestion = 0;
    score = 0;
    loadQuestion();
}

function updateProgress() {
    const progress = ((currentQuestion + 1) / filteredQuestions.length) * 100;
    document.querySelector(".progress-bar").style.width = `${progress}%`;
    document.getElementById("progress-text").textContent = 
        `${currentQuestion + 1}/${filteredQuestions.length}`;
}

window.onload = () => {
    document.getElementById("lecture-select").value = "all";
    filteredQuestions = shuffle([...allQuestions]);
    loadQuestion();
};

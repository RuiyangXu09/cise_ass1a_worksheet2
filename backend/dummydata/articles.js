const articles = [
    {
        _id: "1",
        title: "An expermental evaluation of test driven development vs. test-last development with industry professionais",
        authors: "Munir,H., Wnuk,K.,Peterson,K.,Moayyed,M.",
        source: "EASE",
        pubyear: "2014",
        doi: "https://doi/org/10.1145/2601248.2601267",
        claim_evidence: [["code imporvement", "strong support"], ["product imporvement", "weak against"],
        ["team imporvement", "none"]],
    },

    {
        _id: "2",
        title: "Realizing quality imporvement through test driven development and experiences of four industrial teams",
        authors: "Nagappan,N., Maximillien,E.M.,Bhat,T.,William,L.",
        source: "Empirical Software Engineering, 13(3),289-302",
        pubyear: "2008",
        doi: "https://doi/org/10.1007/s10664-008-9062-z",
        claim_evidence: [["code imporvement", "weak support"], ["product imporvement", "weak against"],
        ["team imporvement", "low support"]],
    },

    {
        _id: "3",
        title: "Does Test-Driven Development Really Imporve Software Design Quality",
        authors: "Janzen,D.S.",
        source: "Software, IEEE,25(2) 77-84",
        pubyear: "2008",
        doi: "",
        claim_evidence: [["code imporvement", "strong support"], ["product imporvement", "weak support"],
        ["team imporvement", "none"]],
    },

    {
        _id: "4",
        title: "A Comparative Case Study onthe Impact of Test-Driven Development on Program Design and Test Coverage",
        authors: "Siniaalto,M.,Abrahamsson,P.",
        source: "ArXiv,Org, cs.SE,arXiv:1711.05082-284",
        pubyear: "2017",
        doi: "https://doi/org/10.1109/esem.2007.35",
        claim_evidence: [["code imporvement", "weak support"], ["product imporvement", "weak wupport"],
        ["team imporvement", "none"]],
    },
];

module.exports = articles;

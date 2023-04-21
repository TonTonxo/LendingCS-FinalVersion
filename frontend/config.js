const address = "0x70e887D2477bA0A0819AAAaBfbf8BD20211Bd1E2"; //Lending Contract Address
const address_2 = "0x16f70fD57C375871B70c71C44B32cb76297bFCDD"; // Migration Contract Address

//ABI FROM LENDING>JSON ABI

const abi = [
  {
    constant: true,
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "loanToLender",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "loans",
    outputs: [
      {
        internalType: "uint256",
        name: "loanId",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "lender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "loanAmount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "interestRate",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "proposalId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "time",
        type: "uint256",
      },
      {
        internalType: "enum Lending.LoanState",
        name: "state",
        type: "uint8",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "potential_lenders",
    outputs: [
      {
        internalType: "uint256",
        name: "loanId",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "lender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "loanAmount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "interestRate",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "proposalId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "time",
        type: "uint256",
      },
      {
        internalType: "enum Lending.LoanState",
        name: "state",
        type: "uint8",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "proposalToBorrower",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "proposals",
    outputs: [
      {
        internalType: "uint256",
        name: "proposalId",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "borrower",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "time",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "mortgage",
        type: "string",
      },
      {
        internalType: "enum Lending.ProposalState",
        name: "state",
        type: "uint8",
      },
      {
        internalType: "bool",
        name: "sendMoney",
        type: "bool",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        internalType: "uint256",
        name: "_loanAmount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_time",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "_mortgage",
        type: "string",
      },
    ],
    name: "createProposal",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        internalType: "uint256",
        name: "_loanAmount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_interestRate",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_proposalId",
        type: "uint256",
      },
    ],
    name: "acceptProposal",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: false,
    inputs: [],
    name: "sendETHtoContract",
    outputs: [],
    payable: true,
    stateMutability: "payable",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "getAllPotentialLenders",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "loanId",
            type: "uint256",
          },
          {
            internalType: "address",
            name: "lender",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "loanAmount",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "interestRate",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "proposalId",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "time",
            type: "uint256",
          },
          {
            internalType: "enum Lending.LoanState",
            name: "state",
            type: "uint8",
          },
        ],
        internalType: "struct Lending.Loan[]",
        name: "",
        type: "tuple[]",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "getAllProposals",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "proposalId",
            type: "uint256",
          },
          {
            internalType: "address",
            name: "borrower",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "amount",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "time",
            type: "uint256",
          },
          {
            internalType: "string",
            name: "mortgage",
            type: "string",
          },
          {
            internalType: "enum Lending.ProposalState",
            name: "state",
            type: "uint8",
          },
          {
            internalType: "bool",
            name: "sendMoney",
            type: "bool",
          },
        ],
        internalType: "struct Lending.Proposal[]",
        name: "",
        type: "tuple[]",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "getAllLoans",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "loanId",
            type: "uint256",
          },
          {
            internalType: "address",
            name: "lender",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "loanAmount",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "interestRate",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "proposalId",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "time",
            type: "uint256",
          },
          {
            internalType: "enum Lending.LoanState",
            name: "state",
            type: "uint8",
          },
        ],
        internalType: "struct Lending.Loan[]",
        name: "",
        type: "tuple[]",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        internalType: "uint256",
        name: "_loanId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_proposalId",
        type: "uint256",
      },
    ],
    name: "acceptLender",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        internalType: "uint256",
        name: "_loanId",
        type: "uint256",
      },
    ],
    name: "loanPaid",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
];

//ABI 2 FROM MORTGAGE.JSON ABI

const abi_2 = [
  {
    inputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    constant: true,
    inputs: [],
    name: "borrower",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "borrowerToMortgage",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    name: "mortgageToBorrower",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        internalType: "string",
        name: "document",
        type: "string",
      },
    ],
    name: "addMortgage",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
];

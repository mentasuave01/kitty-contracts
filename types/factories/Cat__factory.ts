/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Signer,
  utils,
  Contract,
  ContractFactory,
  Overrides,
  BigNumberish,
} from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { Cat, CatInterface } from "../Cat";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_startTime",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "_communityFund",
        type: "address",
      },
      {
        internalType: "address",
        name: "_devFund",
        type: "address",
      },
      {
        internalType: "address",
        name: "_team1Fund",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOperator",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOperator",
        type: "address",
      },
    ],
    name: "OperatorTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [],
    name: "COMMUNITY_FUND_POOL_ALLOCATION",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "DEV_FUND_POOL_ALLOCATION",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "FARMING_POOL_REWARD_ALLOCATION",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "TEAM1_FUND_POOL_ALLOCATION",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "VESTING_DURATION",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
    ],
    name: "allowance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "burn",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "burnFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "claimRewards",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "communityFund",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "communityFundLastClaimed",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "communityFundRewardRate",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "subtractedValue",
        type: "uint256",
      },
    ],
    name: "decreaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "devFund",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "devFundLastClaimed",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "devFundRewardRate",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_farmingIncentiveFund",
        type: "address",
      },
    ],
    name: "distributeReward",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "endTime",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract IERC20",
        name: "_token",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "_to",
        type: "address",
      },
    ],
    name: "governanceRecoverUnsupported",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "addedValue",
        type: "uint256",
      },
    ],
    name: "increaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "isOperator",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "operator",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "rewardPoolDistributed",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_devFund",
        type: "address",
      },
    ],
    name: "setDevFund",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_team1Fund",
        type: "address",
      },
    ],
    name: "setTeam1Fund",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_communityFund",
        type: "address",
      },
    ],
    name: "setTreasuryFund",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "startTime",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "team1Fund",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "team1FundLastClaimed",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "team1FundRewardRate",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOperator_",
        type: "address",
      },
    ],
    name: "transferOperator",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "unclaimedDevFund",
    outputs: [
      {
        internalType: "uint256",
        name: "_pending",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "unclaimedTeam1Fund",
    outputs: [
      {
        internalType: "uint256",
        name: "_pending",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "unclaimedTreasuryFund",
    outputs: [
      {
        internalType: "uint256",
        name: "_pending",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x60806040526012805460ff191690553480156200001b57600080fd5b50604051620021bd380380620021bd833981810160405260808110156200004157600080fd5b5080516020808301516040808501516060909501518151808301835260038082526210d05560ea1b8287018181528551808701909652828652968501528151969794969495929491939262000096926200054f565b508051620000ac9060049060208401906200054f565b50506005805460ff19166012179055506000620000c86200036c565b60058054610100600160a81b0319166101006001600160a01b03841690810291909117909155604051919250906000907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908290a350620001286200036c565b600680546001600160a01b0319166001600160a01b0392831617908190556040519116906000907f74da04524d50c64947f5dd5381ef1a4dca5cba8ed1d816243f9e48aa0b5617ed908290a36200018833670de0b6b3a764000062000370565b60078490556301e13380808501600855600f85905560108590556011859055620001ca9069017b7883c06916600000906200047f602090811b6200129617901c565b600955620001f26825f273933db57000006301e133806200047f602090811b6200129617901c565b600a556200021a6825f273933db57000006301e133806200047f602090811b6200129617901c565b600b556001600160a01b0382166200026f576040805162461bcd60e51b81526020600482015260136024820152720416464726573732063616e6e6f74206265203606c1b604482015290519081900360640190fd5b600e80546001600160a01b0319166001600160a01b03848116919091179091558116620002d9576040805162461bcd60e51b81526020600482015260136024820152720416464726573732063616e6e6f74206265203606c1b604482015290519081900360640190fd5b600d80546001600160a01b0319166001600160a01b0383811691909117909155831662000343576040805162461bcd60e51b81526020600482015260136024820152720416464726573732063616e6e6f74206265203606c1b604482015290519081900360640190fd5b5050600c80546001600160a01b0319166001600160a01b039290921691909117905550620005eb565b3390565b6001600160a01b038216620003cc576040805162461bcd60e51b815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f206164647265737300604482015290519081900360640190fd5b620003da60008383620004e8565b620003f681600254620004ed60201b620012fd1790919060201c565b6002556001600160a01b0382166000908152602081815260409091205462000429918390620012fd620004ed821b17901c565b6001600160a01b0383166000818152602081815260408083209490945583518581529351929391927fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9281900390910190a35050565b6000808211620004d6576040805162461bcd60e51b815260206004820152601a60248201527f536166654d6174683a206469766973696f6e206279207a65726f000000000000604482015290519081900360640190fd5b818381620004e057fe5b049392505050565b505050565b60008282018381101562000548576040805162461bcd60e51b815260206004820152601b60248201527f536166654d6174683a206164646974696f6e206f766572666c6f770000000000604482015290519081900360640190fd5b9392505050565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f106200059257805160ff1916838001178555620005c2565b82800160010185558215620005c2579182015b82811115620005c2578251825591602001919060010190620005a5565b50620005d0929150620005d4565b5090565b5b80821115620005d05760008155600101620005d5565b611bc280620005fb6000396000f3fe608060405234801561001057600080fd5b506004361061027e5760003560e01c80634f337dd51161015c5780639662676c116100ce578063ae4db91911610087578063ae4db91914610627578063dd62ed3e1461064d578063e1e00a3c1461067b578063f2fde38b14610683578063f746b718146106a9578063f7530638146106cf5761027e565b80639662676c146105af578063a06160fd146105b7578063a457c2d7146105bf578063a77a7995146105eb578063a9059cbb146105f3578063abb4b1be1461061f5761027e565b806378e979251161012057806378e979251461053d57806379cc67901461054557806388e0b473146105715780638a19e2a8146105795780638da5cb5b1461059f57806395d89b41146105a75761027e565b80634f337dd5146104c957806354575af4146104d1578063570ca7351461050757806370a082311461050f578063715018a6146105355761027e565b8063313ce567116101f55780633eed3830116101b95780633eed38301461048457806342966c681461048c5780634390d2a8146104a95780634456eda2146104b157806344cdc454146104b95780634cfc4d30146104c15761027e565b8063313ce567146104225780633197cbb614610440578063372500ab1461044857806339509351146104505780633bba8eed1461047c5761027e565b8063177647821161024757806317764782146103a657806318160ddd146103ae57806323b872dd146103b657806329605e77146103ec5780632c07a624146104125780632e3367ce1461041a5761027e565b8062f380f41461028357806304017315146102a757806306fdde03146102c1578063092193ab1461033e578063095ea7b314610366575b600080fd5b61028b6106d7565b604080516001600160a01b039092168252519081900360200190f35b6102af6106e6565b60408051918252519081900360200190f35b6102c96106ec565b6040805160208082528351818301528351919283929083019185019080838360005b838110156103035781810151838201526020016102eb565b50505050905090810190601f1680156103305780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b6103646004803603602081101561035457600080fd5b50356001600160a01b0316610783565b005b6103926004803603604081101561037c57600080fd5b506001600160a01b03813516906020013561089c565b604080519115158252519081900360200190f35b6102af6108ba565b6102af610908565b610392600480360360608110156103cc57600080fd5b506001600160a01b0381358116916020810135909116906040013561090e565b6103646004803603602081101561040257600080fd5b50356001600160a01b0316610995565b6102af610a12565b6102af610a54565b61042a610a5a565b6040805160ff9092168252519081900360200190f35b6102af610a63565b610364610a69565b6103926004803603604081101561046657600080fd5b506001600160a01b038135169060200135610b39565b6102af610b87565b6102af610b95565b610364600480360360208110156104a257600080fd5b5035610ba2565b61028b610bab565b610392610bba565b6102af610be0565b6102af610be6565b6102af610bee565b610364600480360360608110156104e757600080fd5b506001600160a01b03813581169160208101359160409091013516610bfb565b61028b610ccc565b6102af6004803603602081101561052557600080fd5b50356001600160a01b0316610cdb565b610364610cf6565b6102af610dba565b6103646004803603604081101561055b57600080fd5b506001600160a01b038135169060200135610dc0565b6102af610e1a565b6103646004803603602081101561058f57600080fd5b50356001600160a01b0316610e5c565b61028b610f0a565b6102c9610f1e565b610392610f7f565b6102af610f88565b610392600480360360408110156105d557600080fd5b506001600160a01b038135169060200135610f96565b61028b610ffe565b6103926004803603604081101561060957600080fd5b506001600160a01b03813516906020013561100d565b6102af611021565b6103646004803603602081101561063d57600080fd5b50356001600160a01b0316611027565b6102af6004803603604081101561066357600080fd5b506001600160a01b03813581169160200135166110d5565b6102af611100565b6103646004803603602081101561069957600080fd5b50356001600160a01b0316611106565b610364600480360360208110156106bf57600080fd5b50356001600160a01b0316611226565b6102af611290565b600c546001600160a01b031681565b60115481565b60038054604080516020601f60026000196101006001881615020190951694909404938401819004810282018101909252828152606093909290918301828280156107785780601f1061074d57610100808354040283529160200191610778565b820191906000526020600020905b81548152906001019060200180831161075b57829003601f168201915b505050505090505b90565b6006546001600160a01b031633146107cc5760405162461bcd60e51b8152600401808060200182810382526024815260200180611ada6024913960400191505060405180910390fd5b60125460ff1615610824576040805162461bcd60e51b815260206004820152601860248201527f6f6e6c792063616e2064697374726962757465206f6e63650000000000000000604482015290519081900360640190fd5b6001600160a01b038116610878576040805162461bcd60e51b81526020600482015260166024820152750857d9985c9b5a5b99d25b98d95b9d1a5d99519d5b9960521b604482015290519081900360640190fd5b6012805460ff1916600117905561089981690c99805fe37d3e30000061135e565b50565b60006108b06108a961144e565b8484611452565b5060015b92915050565b60085460009042908111156108ce57506008545b80600f54106108e1576000915050610780565b6109026009546108fc600f548461153e90919063ffffffff16565b9061159b565b91505090565b60025490565b600061091b8484846115f4565b61098b8461092761144e565b61098685604051806060016040528060288152602001611a8e602891396001600160a01b038a1660009081526001602052604081209061096561144e565b6001600160a01b03168152602081019190915260400160002054919061174f565b611452565b5060019392505050565b61099d61144e565b6001600160a01b03166109ae610f0a565b6001600160a01b031614610a09576040805162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015290519081900360640190fd5b610899816117e6565b6008546000904290811115610a2657506008545b8060115410610a39576000915050610780565b610902600b546108fc6011548461153e90919063ffffffff16565b600b5481565b60055460ff1690565b60085481565b6000610a736108ba565b9050600081118015610a8f5750600c546001600160a01b031615155b15610aaf57600c54610aaa906001600160a01b03168261135e565b42600f555b610ab7610a12565b9050600081118015610ad35750600e546001600160a01b031615155b15610af357600e54610aee906001600160a01b03168261135e565b426011555b610afb610e1a565b9050600081118015610b175750600d546001600160a01b031615155b1561089957600d54610b32906001600160a01b03168261135e565b4260105550565b60006108b0610b4661144e565b846109868560016000610b5761144e565b6001600160a01b03908116825260208083019390935260409182016000908120918c1681529252902054906112fd565b69017b7883c0691660000081565b6897c9ce4cf6d5c0000081565b61089981611883565b600e546001600160a01b031681565b6006546000906001600160a01b0316610bd161144e565b6001600160a01b031614905090565b60095481565b6301e1338081565b6825f273933db570000081565b6006546001600160a01b03163314610c445760405162461bcd60e51b8152600401808060200182810382526024815260200180611ada6024913960400191505060405180910390fd5b826001600160a01b031663a9059cbb82846040518363ffffffff1660e01b815260040180836001600160a01b0316815260200182815260200192505050602060405180830381600087803b158015610c9b57600080fd5b505af1158015610caf573d6000803e3d6000fd5b505050506040513d6020811015610cc557600080fd5b5050505050565b6006546001600160a01b031690565b6001600160a01b031660009081526020819052604090205490565b610cfe61144e565b6001600160a01b0316610d0f610f0a565b6001600160a01b031614610d6a576040805162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015290519081900360640190fd5b60055460405160009161010090046001600160a01b0316907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908390a360058054610100600160a81b0319169055565b60075481565b6000610df782604051806060016040528060248152602001611ab660249139610df086610deb61144e565b6110d5565b919061174f565b9050610e0b83610e0561144e565b83611452565b610e158383611890565b505050565b6008546000904290811115610e2e57506008545b8060105410610e41576000915050610780565b610902600a546108fc6010548461153e90919063ffffffff16565b600d546001600160a01b03163314610ea4576040805162461bcd60e51b8152602060048201526006602482015265217465616d3160d01b604482015290519081900360640190fd5b6001600160a01b038116610ee8576040805162461bcd60e51b815260206004808301919091526024820152637a65726f60e01b604482015290519081900360640190fd5b600d80546001600160a01b0319166001600160a01b0392909216919091179055565b60055461010090046001600160a01b031690565b60048054604080516020601f60026000196101006001881615020190951694909404938401819004810282018101909252828152606093909290918301828280156107785780601f1061074d57610100808354040283529160200191610778565b60125460ff1681565b690c99805fe37d3e30000081565b60006108b0610fa361144e565b8461098685604051806060016040528060258152602001611b686025913960016000610fcd61144e565b6001600160a01b03908116825260208083019390935260409182016000908120918d1681529252902054919061174f565b600d546001600160a01b031681565b60006108b061101a61144e565b84846115f4565b600f5481565b600e546001600160a01b0316331461106f576040805162461bcd60e51b8152602060048083019190915260248201526310b232bb60e11b604482015290519081900360640190fd5b6001600160a01b0381166110b3576040805162461bcd60e51b815260206004808301919091526024820152637a65726f60e01b604482015290519081900360640190fd5b600e80546001600160a01b0319166001600160a01b0392909216919091179055565b6001600160a01b03918216600090815260016020908152604080832093909416825291909152205490565b600a5481565b61110e61144e565b6001600160a01b031661111f610f0a565b6001600160a01b03161461117a576040805162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015290519081900360640190fd5b6001600160a01b0381166111bf5760405162461bcd60e51b81526004018080602001828103825260268152602001806119d26026913960400191505060405180910390fd5b6005546040516001600160a01b0380841692610100900416907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a3600580546001600160a01b0390921661010002610100600160a81b0319909216919091179055565b600e546001600160a01b0316331461126e576040805162461bcd60e51b8152602060048083019190915260248201526310b232bb60e11b604482015290519081900360640190fd5b600c80546001600160a01b0319166001600160a01b0392909216919091179055565b60105481565b60008082116112ec576040805162461bcd60e51b815260206004820152601a60248201527f536166654d6174683a206469766973696f6e206279207a65726f000000000000604482015290519081900360640190fd5b8183816112f557fe5b049392505050565b600082820183811015611357576040805162461bcd60e51b815260206004820152601b60248201527f536166654d6174683a206164646974696f6e206f766572666c6f770000000000604482015290519081900360640190fd5b9392505050565b6001600160a01b0382166113b9576040805162461bcd60e51b815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f206164647265737300604482015290519081900360640190fd5b6113c560008383610e15565b6002546113d290826112fd565b6002556001600160a01b0382166000908152602081905260409020546113f890826112fd565b6001600160a01b0383166000818152602081815260408083209490945583518581529351929391927fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9281900390910190a35050565b3390565b6001600160a01b0383166114975760405162461bcd60e51b8152600401808060200182810382526024815260200180611b446024913960400191505060405180910390fd5b6001600160a01b0382166114dc5760405162461bcd60e51b81526004018080602001828103825260228152602001806119f86022913960400191505060405180910390fd5b6001600160a01b03808416600081815260016020908152604080832094871680845294825291829020859055815185815291517f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b9259281900390910190a3505050565b600082821115611595576040805162461bcd60e51b815260206004820152601e60248201527f536166654d6174683a207375627472616374696f6e206f766572666c6f770000604482015290519081900360640190fd5b50900390565b6000826115aa575060006108b4565b828202828482816115b757fe5b04146113575760405162461bcd60e51b8152600401808060200182810382526021815260200180611a6d6021913960400191505060405180910390fd5b6001600160a01b0383166116395760405162461bcd60e51b8152600401808060200182810382526025815260200180611b1f6025913960400191505060405180910390fd5b6001600160a01b03821661167e5760405162461bcd60e51b815260040180806020018281038252602381526020018061198d6023913960400191505060405180910390fd5b611689838383610e15565b6116c681604051806060016040528060268152602001611a1a602691396001600160a01b038616600090815260208190526040902054919061174f565b6001600160a01b0380851660009081526020819052604080822093909355908416815220546116f590826112fd565b6001600160a01b038084166000818152602081815260409182902094909455805185815290519193928716927fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef92918290030190a3505050565b600081848411156117de5760405162461bcd60e51b81526004018080602001828103825283818151815260200191508051906020019080838360005b838110156117a357818101518382015260200161178b565b50505050905090810190601f1680156117d05780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b505050900390565b6001600160a01b03811661182b5760405162461bcd60e51b815260040180806020018281038252602d815260200180611a40602d913960400191505060405180910390fd5b6040516001600160a01b038216906000907f74da04524d50c64947f5dd5381ef1a4dca5cba8ed1d816243f9e48aa0b5617ed908290a3600680546001600160a01b0319166001600160a01b0392909216919091179055565b61089961188e61144e565b825b6001600160a01b0382166118d55760405162461bcd60e51b8152600401808060200182810382526021815260200180611afe6021913960400191505060405180910390fd5b6118e182600083610e15565b61191e816040518060600160405280602281526020016119b0602291396001600160a01b038516600090815260208190526040902054919061174f565b6001600160a01b038316600090815260208190526040902055600254611944908261153e565b6002556040805182815290516000916001600160a01b038516917fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9181900360200190a3505056fe45524332303a207472616e7366657220746f20746865207a65726f206164647265737345524332303a206275726e20616d6f756e7420657863656564732062616c616e63654f776e61626c653a206e6577206f776e657220697320746865207a65726f206164647265737345524332303a20617070726f766520746f20746865207a65726f206164647265737345524332303a207472616e7366657220616d6f756e7420657863656564732062616c616e63656f70657261746f723a207a65726f206164647265737320676976656e20666f72206e6577206f70657261746f72536166654d6174683a206d756c7469706c69636174696f6e206f766572666c6f7745524332303a207472616e7366657220616d6f756e74206578636565647320616c6c6f77616e636545524332303a206275726e20616d6f756e74206578636565647320616c6c6f77616e63656f70657261746f723a2063616c6c6572206973206e6f7420746865206f70657261746f7245524332303a206275726e2066726f6d20746865207a65726f206164647265737345524332303a207472616e736665722066726f6d20746865207a65726f206164647265737345524332303a20617070726f76652066726f6d20746865207a65726f206164647265737345524332303a2064656372656173656420616c6c6f77616e63652062656c6f77207a65726fa2646970667358221220e7813e070023e2b661fe00096bdf2877021b1ade51edacc341c2959bd065f04064736f6c634300060c0033";

type CatConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: CatConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Cat__factory extends ContractFactory {
  constructor(...args: CatConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  deploy(
    _startTime: BigNumberish,
    _communityFund: string,
    _devFund: string,
    _team1Fund: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<Cat> {
    return super.deploy(
      _startTime,
      _communityFund,
      _devFund,
      _team1Fund,
      overrides || {}
    ) as Promise<Cat>;
  }
  getDeployTransaction(
    _startTime: BigNumberish,
    _communityFund: string,
    _devFund: string,
    _team1Fund: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      _startTime,
      _communityFund,
      _devFund,
      _team1Fund,
      overrides || {}
    );
  }
  attach(address: string): Cat {
    return super.attach(address) as Cat;
  }
  connect(signer: Signer): Cat__factory {
    return super.connect(signer) as Cat__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): CatInterface {
    return new utils.Interface(_abi) as CatInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): Cat {
    return new Contract(address, _abi, signerOrProvider) as Cat;
  }
}

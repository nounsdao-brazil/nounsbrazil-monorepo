import config from '../config';

export const resolveNounContractAddress = (address: string) => {
  switch (address.toLowerCase()) {
    case config.addresses.nounsDAOProxy.toLowerCase():
      return 'NounsBrazil DAO Proxy';
    case config.addresses.nounsAuctionHouseProxy.toLowerCase():
      return 'NounsBrazil Auction House Proxy';
    case config.addresses.nounsDaoExecutor.toLowerCase():
      return 'NounsBrazil DAO Treasury';
    default:
      return undefined;
  }
};

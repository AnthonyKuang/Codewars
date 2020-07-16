function findShort(s) {
  return s.split(' ').map(item => item.length).sort((a, b) => (a - b))[0];
}

console.log(findShort('Ripple Dash ProofOfStake BTC Bitcoin ProofOfStake MadeSageCoin 21inc Lisk Dogecoin Waves Factom ProofOfStake'))
async function getToken() {
    const game_contract = Contract;
    // 위의 game_contract로부터 getTokens 함수를 call 함수를 통해 반환, record 에 저장
    const record = await game_contract.methods.getTokens().call();
    console.log(record);
}

//use market:test3() to generate this compiled binary.

function scalar_market_contract_old(direction, expires, maxprice, server_pubkey, period, amount, oid, bet_height, lower_limit, upper_limit, many) {
    var a;
    if (direction == 1) {
	a = string_to_array(atob("AAAAJxAAAAAAAngA"));
    } else if (direction == 2) {
	a = string_to_array(atob("AAAAAAAAAAAAAngA"));
    }
    var b = string_to_array(atob("AAAAAAN4AA=="));
    var c = string_to_array(atob("AAAAAAR4AA=="));
    var d = string_to_array(atob("AAAAAAV4AA=="));
    var e = string_to_array(atob("AAAAAAZ4AA=="));
    var f = string_to_array(atob("AAAAAAd4AgAAACA="));
    var g = string_to_array(atob("AAAAAAF4AA=="));
    var h = string_to_array(atob("AAAAAAh4AgAAAEE="));
    var i;
    if (direction == 1) {
	i = string_to_array(atob("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"));
    } else if (direction == 2) {
	i = string_to_array(atob("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"));
    }
    if (many != 10) {
	console.log("many must be 10");
	return "error";
    }
    console.log("market oid is ");
    console.log(oid);
    var contract = a.concat(
        integer_to_array(upper_limit, 4)).concat(
            b).concat(
		integer_to_array(lower_limit, 4)).concat(
		    c).concat(
			integer_to_array(bet_height, 4)).concat(
			    d).concat(
				integer_to_array(expires, 4)).concat(
				    e).concat(
					integer_to_array(maxprice, 4)).concat(
					    f).concat(
						string_to_array(atob(oid))).concat(
						    g).concat(
							integer_to_array(period, 4)).concat(
							    h).concat(
								string_to_array(atob(server_pubkey))).concat(i);
    console.log("compiled contract");
    console.log(JSON.stringify(contract));
    var contract2 =  btoa(array_to_string(contract));
    var codekey = ["market", 2, oid, expires, server_pubkey, period, oid, lower_limit, upper_limit];
    //var amount2 = Math.floor(amount * ((10000 + maxprice) / 10000));
    return ["bet", contract2, amount, codekey, [-7, direction, maxprice]]; //codekey is insttructions on how to re-create the contract, so we can do pattern matching when updating channels.
}
function old_market_contract(direction, expires, maxprice, server_pubkey, period, amount, oid, bet_height) {
    //var a = string_to_array(atob("AAAAJxAAAAAAAXgA"));
    var a;
    var a2 = string_to_array(atob("AAAAAAJ4AA=="));
    var b = string_to_array(atob("AAAAAAN4AA=="));
    var c = string_to_array(atob("AAAAAAR4AgAAACA="));
    var d = string_to_array(atob("AAAAAAV4AA=="));
    var e = string_to_array(atob("AAAAAAZ4AgAAAEE="));
    var f;
    if (direction == 1) {
        a = string_to_array(atob("AAAAJxAAAAAAAXgA"));
        f = string_to_array(atob("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"));
    } else if (direction == 2) {
        a = string_to_array(atob("AAAAAAAAAAAAAXgA"));
        f = string_to_array(atob("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"));
    } else {
        console.log("that is an invalid direction");
        console.log(direction);
        return("invalid direction to bet");
    }
    console.log("market oid is ");
    console.log(oid);
    var g = a.concat(
        integer_to_array(bet_height, 4)).concat(
            a2).concat(
                integer_to_array(expires, 4)).concat(
                    b).concat(
                        integer_to_array(maxprice, 4)).concat(
                            c).concat(
                                string_to_array(atob(oid))).concat(
                                    d).concat(
                                        integer_to_array(period, 4)).concat(
                                            e).concat(
                                                string_to_array(atob(server_pubkey))).concat(
                                                    f);
    console.log("compiled contract");
    console.log(JSON.stringify(g));
    var contract =  btoa(array_to_string(g));
    var codekey = ["market", 1, oid, expires, server_pubkey, period, oid];
    var amount2 = Math.floor(amount * ((10000 + maxprice) / 10000));
    return ["bet", contract, amount2, codekey, [-7, direction, maxprice]]; //codekey is insttructions on how to re-create the contract, so we can do pattern matching when updating channels.
}
function cint(X) {
    return integer_to_array(0, 1).concat(integer_to_array(X, 4));
}
function cbin(N, X) {
    return integer_to_array(2, 1).concat(integer_to_array(N, 4)).concat(string_to_array(atob(X)))
}
function scalar_market_contract(direction, expires, maxprice, server_pubkey, period, amount, oid, height, lowerlimit, upperlimit, many, startheight) {
    if (!(many == 10)) {
        console.log("many must be 10");
        return 0;
    }
    if(!(startheight)) {
        throw("scalar market contract undefined startheight");
    }
    //direction height expires maxprice marketidlong marketid period pubkey upperlimit lowerlimit startheight
    var loid = btoa(oid);
    var s = oid.length;
    var g =
    (string_to_array(atob("AAAAAfQe"))).concat//500 >r
    (cint(direction)).concat
    (cint(height)).concat
    (cint(expires)).concat
    (cint(maxprice)).concat
    (cbin(s, loid)).concat
    (cbin(32, oid)).concat
    (cint(period)).concat
    (cbin(65, server_pubkey)).concat
    (cint(upperlimit)).concat
    (cint(lowerlimit)).concat
    (cint(startheight)).concat
    (string_to_array(atob("clBGDUdIbwAAAAABeHIAAAAAMDIAAAAAA4cUbwAAAAACeHIgeCAAAAAAATJ4IAAAAAACMnggeQAAAAAAOhcUFEYgAAAAAAIyeUcCAAAAB3NjYWxhciAgAAAAAAEyeYYCAAAADCBiaXQgbnVtYmVyICB5AAAAAAJ5IAAAAAAEMh5xHxSGhiggAAAAAAQyeAAAAAADeQAAAAAAhiAAAAAABDJ5AAAAAAAWhoYoSG8AAAAABHhyIHiDIAAAAAACMnggAAAAAAMyeCAAAAAAAjJ5gyAAAAAABDJ4IAAAAAAFMnggAAAAAAQyeYMUFSAAAAAABjJ4AAAAAAA6FxQURgAAAAAARyAAAAAABjJ5AAAAACCHFAAAAAABhxYUIAAAAAAJMngAAAAABXkAAAAABnkgeQAAAAAEeSAAAAAADDIecR8UIAAAAAALMnggAAAAAAMyeQAAAAAFOhcUFAAAAAABeSAAAAAADDIecR8UIAAAAAALMnkgAAAAAAUyeToXFBQAAAAAAXkgAAAAAAwyHnEfFAIAAAADAAAAIAAAAAAJMnmGSG8AAAAAB3hyIHggAAAAAAEyeCAAAAAAAjJ4IAAAAAABMnmEOhcUFEYgAAAAAAIyeYhHIAAAAAABMnmDIAAAAAADMnggeQAAAAAHeSAAAAAABjIecR8UIAAAAAACMnmCIAAAAAADMnkgeQAAAAABMnBxSG8AAAAACHhyhBYAAAAAAAAAAAAIeXFvAAAAAAl4ciB4IAAAAAABMnggeYQ6FxQURoRHIHmDFCAAAAAAATJ5eXEgAAAAAAEyeSB5gxYUcHGCSG8AAAAACnhyIHggAAAAAAEyeCAAAAAAAjJ4IHmEOhcUFEYgAAAAAAEyeUcgAAAAAAIyeSAAAAAAATJ5IHmDFCAAAAAAAjJ5eXEgeYMWFHBxSG8AAAAAC3hyAAAAAAM6FxQUUm8AAAAADHhyIHgAAAAADCB5AAAAAAAWAAAAAAt5cW8AAAAADXhyUFJvAAAAAA54ciB4AAAAAA4geQAAAAAAFgAAAAALeXFvAAAAAA94cgAAAAABM1BvAAAAABB4ciB4AAAAABAgeQAAAAAKeXFvAAAAABF4chYAAAAAAjQybwAAAAASeHIgeAAAAAASIHkAAAAAABYAAAAAC3lxbwAAAAATeHIgeBUgAAAAAAEyeCB5N0YgAAAAAAEyeUcgeUhvAAAAABR4ciB4FSAAAAAAATJ4IHk3RiB5RyAAAAAAATJ5SG8AAAAAFXhyAAAAACiHIAAAAAABMnggAAAAAAIyeCAAAAAAATJ5AAAAAASHIAAAAAADMngAAAAAAocgAAAAAAUyeCAAAAAABjJ4AgAAAAIAACAAAAAABTJ5hiAAAAAABzJ4IAAAAAAGMnkAAAAAAocgAAAAAAgyeCAAAAAACTJ4AgAAAAIAACAAAAAACDJ5hiAAAAAACjJ4IAAAAAACMnkgAAAAAAEyeQAAAAAWeSkAAAAAAXkgAAAAAAsyHnEfFAAAAAAFeSAAAAAACTJ5OhcUFAAAAAABeSAAAAAACzIecR8UIAAAAAADMnkAAAAAF3k3UAAAAAABeSAAAAAACzIecR8UIAAAAAAHMnkgAAAAAAMyeRYgAAAAAAoyeW8AAAAAGHhyAAAAJxA0AAAAABl5AAAAJxAyNW8AAAAAGnhyFSB4AAAAAAA3RiB5AAAAAAAWM0cgeUhvAAAAABt4cgAAAAAYeSAAAAAAAjIecR8UFBQVIAAAAAADMnheAAAAABx5MzYAAAAAAXkgAAAAAAQyHnEfFAAAAAAdeV4zIAAAAAADMnkAAAAAARYAAAAAHHk1MgAAAAAeeQAAAAAaeXELbwAAAAAfeHIgeAAAAAAYeSAAAAAAAzIecR8UIAAAAAACMnggAAAAAAMyeCAAAAAABDJ4IHkAAAAAGHkgAAAAAAYyHnEfFCAAAAAABTJ4IAAAAAAGMnggAAAAAAQyeRYzAAAAABt5IAAAAAAIMh5xHxQAAAAAHHkAAAAAAjU3AAAAAAF5IAAAAAAIMh5xHxQgAAAAAAYyeSAAAAAAAzJ5OhcUFFAgAAAAAAUyeSAAAAAAAjJ5OhcUFFBSAAAAAAF5cQAAAAAAAAAehIAAAAAAAAAAAAAaeXELbwAAAAAgeHIgeEYAAAAAHnkgeTdHAAAAABl5IHk2SG8AAAAAIXhyIHgVIAAAAAABMngAAAAADXkgAAAAAAIyHnEfFEYAAAAAHnlHIAAAAAABMnkAAAAAD3kgAAAAAAIyHnEfFEZeAAAAAB15NgAAAAABeXEAAAAAAAAAAAAdeQAAAAAeeQAAAAAaeXELRyAAAAAAATJ5AAAAABF5IAAAAAADMh5xAAAAABN5cR8UAAAAJxAWAAAAACJ5MzQAAAAAI3kAAAAAInkzNQAAAAAAFgAAACcQAAAAABR5IAAAAAAFMh5xAAAAABV5cR8UIHlGAAAAJxBHAAAAAABIM0hIbwAAAAAkeHIgeCAAAAAAATJ4AAAAABh5IAAAAAAEMh5xHxQgAAAAAAMyeCAAAAAABDJ4IAAAAAAFMnggAAAAAAEyeQAAAAAJeSAAAAAABzIecR8UIHkAAAAAJHkgAAAAAAgyHnEfFCAAAAAABzJ4AAAAAAMAAAAAAAAAAAAdeSAAAAAABTJ5MwAAAAAVeSAAAAAACTIecR8UMiAAAAAACDJ4IHlGIAAAAAAEMnkAAAAnEBYzRyAAAAAABDJ5SBUgAAAAAAkyeAAAAAAZeToXFBRGIAAAAAAHMnkgAAAAAAMyeTQAAAAnEDUAAAAnEAAAAAAZeTMgAAAAAAMyeQAAACcQFjM0AAAAJxA1MkcgeSAAAAAABDJ5AAAAACF5IAAAAAALMh5xAAAAAAF5cR8UIAAAAAAHMnkAAAAAGXkgAAAAAAkyeTMySCAAAAAACjJ4IAAAAAAIMnkAAAAAABYgAAAAAAoyeQAAAAAaeXELbwAAAAAleHIAAAAACXkgAAAAAAEyHnEAAAAAD3lxHxRGAAAAB9AAAAAAHXkAAAAAHHkyMgAAAAAAAAAAAB55AAAAABp5cQtHAAAAABx5AAAAAAEAAAAAHnkAAAAAGnlxC0hvAAAAACZ4cgAAAAAceV4AAAAAHHk1AAAAAAALbwAAAAAneAAAAAADeAAAAAAieAAAAAAjeAAAAAAWeAAAAAAceAAAAAAFeAAAAAAGeAAAAAAZeAAAAAAdeAAAAAAXeCB4IAAAAAABMnggAAAAAAIyeAAAACcQAAAAABl5MwAAAAAeeCAAAAAAAjJ5AAAAAAE6RhQUIAAAAAABMnkgeQAAAAABMwAAAAAleXFHFAAAAAAEOkYUFCAAAAAAATJ5AAAAACZ5cUcUAAAAAAA6RhQUAAAAACd5cUcUAAAAAAI6RhQUAAAAACB5cUcUAAAAAAM6RhQUAAAAAB95cUcUFA1ISEhISA==")));
    var contract =  btoa(array_to_string(g));
    var codekey = ["market", 2, oid, expires, server_pubkey, period, oid, lowerlimit, upperlimit, startheight];
    //var amount2 = Math.floor(amount * ((10000 + maxprice) / 10000));
    return ["bet", contract, amount, codekey, [-7, direction, maxprice]]; //codekey is insttructions on how to re-create the contract, so we can do pattern matching when updating channels.
    
};
function market_contract(direction, expires, maxprice, server_pubkey, period, amount, oid, bet_height) {
    var g = (cint(direction)).concat
    (cint(bet_height)).concat
    (cint(expires)).concat
    (cint(maxprice)).concat
    (cbin(32, oid)).concat
    (cint(period)).concat
    (cbin(65, server_pubkey)).concat
    (string_to_array(atob("AAAAAfQe"))).concat//500 >r
    (string_to_array(atob("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")));
    var contract =  btoa(array_to_string(g));
    var codekey = ["market", 1, oid, expires, server_pubkey, period, oid];
    var amount2 = Math.floor(amount * ((10000 + maxprice) / 10000));
    return ["bet", contract, amount2, codekey, [-7, direction, maxprice]]; //codekey is insttructions on how to re-create the contract, so we can do pattern matching when updating channels.
}    
function market_trade(cd, amount, price, bet, oid) { //oid unused
    var market_spk = cd.me;
    console.log("market trade spk before ");
    console.log(JSON.stringify(market_spk));
    var cid = market_spk[6];
    var time_limit = 100000;//actually constants:time_limit div 10
    var space_limit = 100000;
    var cGran = 10000;
    var a = Math.floor((amount * price) / cGran);
    console.log(JSON.stringify(bet));
    market_spk[3][0] = bet;
    market_spk[3] = ([-6]).concat(market_spk[3]);//add new bet to front
    market_spk[8] = market_spk[8] + 1; //nonce
    market_spk[5] = market_spk[5] + time_limit;// time_gas/10
    market_spk[4] = Math.max(market_spk[4], space_limit); //space_gas
    market_spk[7] = market_spk[7] - a; //amount
    console.log("market trade spk after ");
    console.log(JSON.stringify(market_spk));
    return market_spk;
}

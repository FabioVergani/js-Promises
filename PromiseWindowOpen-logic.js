//PromiseWindowOpen
(w1=>{
	new w1.Promise(resolve=>{
		const d2=w1.open().document;
		if('complete'!==d2.readyState){
			const onReady=()=>{
				resolve(d2);
				d2.removeEventListener('load',onReady,true);
			};
			d2.addEventListener('load',onReady,true);
		}else{
			resolve(d2)
		}
	}).then(d2=>{
		console.dir(d2.body)
	})
})(window);

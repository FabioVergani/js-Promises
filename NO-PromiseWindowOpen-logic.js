(w=>{
	const d=w.document,
	f=()=>{
		console.dir(d.body)
	};
	if('complete'!==d.readyState){
		const l=x=>{d[x+'EventListener']('load',g,true)},
		g=e=>{
			l('remove');
			f()
		};
		l('add')
	}else{
		f()
	}
})(window.open());

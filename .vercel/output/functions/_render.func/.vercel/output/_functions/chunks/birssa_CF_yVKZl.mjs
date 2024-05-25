const birssa = new Proxy({"src":"/_astro/birssa.B49zqpFm.png","width":1347,"height":596,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/Fjcc1/apps_projects/astro/portfolio_cv/src/assets/projects/birssa.png";
							}
							
							return target[name];
						}
					});

export { birssa as default };

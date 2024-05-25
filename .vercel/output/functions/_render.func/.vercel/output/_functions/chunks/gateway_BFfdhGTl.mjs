const gateway = new Proxy({"src":"/_astro/gateway.C-ABKHuX.png","width":1350,"height":596,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/Fjcc1/apps_projects/astro/portfolio_cv/src/assets/projects/gateway.png";
							}
							
							return target[name];
						}
					});

export { gateway as default };

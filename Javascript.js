const nicolasCageMovies = [
            // 1980s - Early Career & Breakthrough
            { title: "Fast Times at Ridgemont High", year: 1982, genre: "Comedy", rating: 7.1, description: "A group of Southern California high school students and their various adventures during their senior year. Based on Cameron Crowe's book, this coming-of-age comedy follows the trials and tribulations of teens at Ridgemont High, including dating, sex, drugs, and rock and roll. Cage appears in a memorable supporting role as Brad's Bud, a stoner character that showcased his early comedic timing.", costars: ["Sean Penn", "Jennifer Jason Leigh"] },
            { title: "Valley Girl", year: 1983, genre: "Romance", rating: 6.4, description: "Julie, a girl from the valley, falls for Randy, a punk from across town. When Julie's friends disapprove, she must choose between fitting in with her crowd or following her heart. This modern-day Romeo and Juliet story set in 1980s San Fernando Valley captures the clash between punk rock culture and valley girl lifestyle. Cage's breakout role as Randy established him as a leading man with his intense, committed performance.", costars: ["Deborah Foreman"] },
            { title: "Racing with the Moon", year: 1984, genre: "Drama", rating: 6.7, description: "Set in 1942 California, two young men about to be shipped out to World War II spend their last weeks in their hometown pursuing the women they think they love. Henry and Nicky face the uncertainty of war while dealing with first love, friendship, and the loss of innocence. The film explores themes of youth, war, and the American home front during WWII with a nostalgic, bittersweet tone.", costars: ["Sean Penn", "Elizabeth McGovern"] },
            { title: "Birdy", year: 1984, genre: "Drama", rating: 7.2, description: "Two friends return from Vietnam, but one has become obsessed with birds and believes he can fly. Al visits his childhood friend Birdy in a military psychiatric hospital, where Birdy sits in a catatonic state after being traumatized in the war. Through flashbacks, we see their friendship and Birdy's growing fixation with flight. Cage delivers a powerful performance as Al, desperately trying to reach his damaged friend.", costars: ["Matthew Modine"] },
            { title: "The Cotton Club", year: 1984, genre: "Crime", rating: 6.5, description: "The Cotton Club was a famous night club in Harlem during the 1920s and 1930s. The story follows the lives and careers of many characters who worked or performed there, including musicians, dancers, and gangsters. Set against the backdrop of prohibition-era New York, the film explores racial tensions, organized crime, and the birth of jazz culture. Cage plays Vincent Dwyer, a cornet player caught up in the club's dangerous world.", costars: ["Richard Gere", "Diane Lane"] },
            { title: "Peggy Sue Got Married", year: 1986, genre: "Fantasy", rating: 6.4, description: "Peggy Sue faints at her 25-year high school reunion and wakes up in her teenage body, back in high school in 1960. Given the chance to relive her youth with the knowledge of her future, she must decide whether to change her destiny or accept her fate. Directed by Francis Ford Coppola, this time-travel romance explores themes of regret, second chances, and the complexity of life choices.", costars: ["Kathleen Turner"] },
            { title: "Raising Arizona", year: 1987, genre: "Comedy", rating: 7.3, description: "When a childless couple of an ex-con and an ex-cop decide to help themselves to one of another family's quintuplets, their lives become more complicated than they anticipated. Hi and Ed McDunnough can't have children, so they kidnap one of the Arizona quintuplets. The Coen Brothers' breakout comedy features surreal humor, memorable characters, and Cage's manic energy as the well-meaning but hapless Hi.", costars: ["Holly Hunter", "John Goodman"] },
            { title: "Moonstruck", year: 1987, genre: "Romance", rating: 7.1, description: "Loretta Castorini, a bookkeeper from Brooklyn, finds herself in a difficult situation when she falls for the estranged younger brother of the man she has agreed to marry. Set in the Italian-American community of Brooklyn, this romantic comedy explores family dynamics, passion, and the complexities of love. Cage plays Ronny Cammareri, the passionate baker who sweeps Loretta off her feet with his intensity and vulnerability.", costars: ["Cher", "Olympia Dukakis"] },
            { title: "Vampire's Kiss", year: 1988, genre: "Horror", rating: 6.1, description: "A publishing executive believes he's turning into a vampire after being bitten by a woman during a one-night stand. As his mental state deteriorates, he becomes increasingly erratic and violent, terrorizing his secretary and anyone who crosses his path. This dark comedy-horror showcases Cage's most unhinged performance, featuring his infamous alphabet recitation scene and manic energy that borders on the surreal.", costars: ["Maria Conchita Alonso"] },
            
            // 1990s - Peak Period & Oscar Win
            { title: "Time to Kill", year: 1989, genre: "War", rating: 5.8, description: "During World War II, a young Italian soldier becomes disillusioned with the war after witnessing the brutal execution of civilians. As the conflict intensifies, he must choose between duty and conscience. Set in 1943 Italy, this war drama explores the psychological toll of combat and the moral ambiguity of warfare. Cage plays an American officer who encounters the Italian protagonist during the chaos of war.", costars: ["Giancarlo Giannini"] },
            { title: "Wild at Heart", year: 1990, genre: "Crime", rating: 7.2, description: "Sailor Ripley and Lula Fortune are madly in love, but Lula's psychotic mother and her boyfriend have other plans for them. After Sailor kills a man in self-defense, the couple goes on the run across the American South, pursued by a collection of dangerous criminals. David Lynch's Palme d'Or-winning road movie is a violent, surreal journey through America's dark underbelly, filled with bizarre characters and twisted romance.", costars: ["Laura Dern", "Willem Dafoe"] },
            { title: "Fire Birds", year: 1990, genre: "Action", rating: 4.8, description: "Elite Apache helicopter pilots are trained to fight drug cartels in South America. Jake Preston struggles with depth perception problems that threaten his career while trying to stop a drug lord who has been shooting down Army helicopters. This military action film follows the intense training and dangerous missions of helicopter combat pilots. Often compared to Top Gun, the film focuses on high-tech aerial warfare and military romance.", costars: ["Tommy Lee Jones", "Sean Young"] },
            { title: "Zandalee", year: 1991, genre: "Drama", rating: 4.4, description: "Bored with her marriage to a successful but passionless businessman, Zandalee begins a torrid affair with her husband's old friend, a struggling artist. Set in sultry New Orleans, this erotic drama explores themes of desire, betrayal, and sexual awakening. The film examines how passion can destroy lives and relationships, leading to tragic consequences for all involved.", costars: ["Judge Reinhold", "Erika Anderson"] },
            { title: "Honeymoon in Vegas", year: 1992, genre: "Comedy", rating: 5.8, description: "Jack loses his fiancée Betsy to poker legend Tommy Korman in a rigged game. To win her back, Jack must fly to Las Vegas and outmaneuver the smooth-talking gambler who has taken Betsy to Hawaii. This romantic comedy features Elvis impersonators, skydiving stunts, and the bright lights of Las Vegas. Cage's manic energy drives this tale of love, gambling, and second chances.", costars: ["James Caan", "Sarah Jessica Parker"] },
            { title: "Amos & Andrew", year: 1993, genre: "Comedy", rating: 5.7, description: "When a successful African American writer moves into an exclusive white neighborhood, racist neighbors mistake him for a burglar. To cover up their mistake, the police chief stages a fake hostage situation using a small-time crook. This social satire tackles issues of racism and mistaken identity while attempting to find humor in serious social problems.", costars: ["Samuel L. Jackson"] },
            { title: "Red Rock West", year: 1993, genre: "Thriller", rating: 7.0, description: "Unemployed and broke, Michael Williams stops in the small town of Red Rock, Wyoming, where he's mistaken for a hitman hired to kill a man's wife. When the real killer shows up, Michael finds himself caught in a deadly web of deception, murder, and betrayal. This neo-noir thriller features double-crosses, femme fatales, and moral ambiguity in classic film noir tradition.", costars: ["Dennis Hopper", "Lara Flynn Boyle"] },
            { title: "Deadfall", year: 1993, genre: "Crime", rating: 4.0, description: "After a failed con game, Joe and his partner flee to Los Angeles where they become involved with Joe's father's criminal associates. When Joe discovers his father has been murdered, he seeks revenge while trying to pull off one last big score. This neo-noir crime thriller explores family loyalty, betrayal, and the consequences of a life of crime.", costars: ["Michael Biehn", "James Coburn"] },
            { title: "Guarding Tess", year: 1994, genre: "Comedy", rating: 6.2, description: "Secret Service agent Doug Chesnic is assigned to protect former First Lady Tess Carlisle, a demanding and manipulative woman who makes his life miserable. Despite their constant conflicts, an unlikely friendship develops between the dedicated agent and the stubborn ex-president's wife. This comedy-drama explores duty, respect, and the human side of those who serve in the public eye.", costars: ["Shirley MacLaine"] },
            { title: "It Could Happen to You", year: 1994, genre: "Romance", rating: 6.4, description: "A New York City police officer promises to share his lottery winnings with a waitress instead of leaving a tip. When his ticket wins $4 million, he keeps his promise, causing complications with his greedy wife and leading to an unexpected romance. Based on a true story, this feel-good romantic comedy celebrates kindness, generosity, and the belief that good deeds are rewarded.", costars: ["Bridget Fonda", "Rosie Perez"] },
            { title: "Trapped in Paradise", year: 1994, genre: "Comedy", rating: 5.9, description: "Three brothers rob a bank in a small Pennsylvania town on Christmas Eve, but their getaway is hampered by a blizzard and the overwhelming kindness of the local residents. As the criminals become trapped in the town, they experience the true meaning of Christmas and community spirit. This holiday comedy combines crime caper elements with heartwarming Christmas themes.", costars: ["Jon Lovitz", "Dana Carvey"] },
            { title: "Kiss of Death", year: 1995, genre: "Crime", rating: 5.9, description: "Ex-convict Jimmy Kilmartin is forced to go undercover for the FBI to bring down psychotic gangster Little Junior Brown. When his cover is blown, Jimmy must protect his family while staying one step ahead of the dangerous criminal. This crime thriller remake explores themes of redemption, family loyalty, and the price of justice.", costars: ["David Caruso", "Samuel L. Jackson"] },
            { title: "Leaving Las Vegas", year: 1995, genre: "Drama", rating: 7.5, description: "Ben Sanderson, a Hollywood screenwriter who has lost everything because of his alcoholism, arrives in Las Vegas to drink himself to death. There he meets Sera, a prostitute with her own demons, and they form an unlikely bond. Both are self-destructive, but together they find a strange form of love and acceptance. Cage won the Academy Award for Best Actor for his raw, devastating portrayal of addiction and despair.", costars: ["Elisabeth Shue"] },
            { title: "The Rock", year: 1996, genre: "Action", rating: 7.4, description: "A rogue Marine general seizes Alcatraz Island with tourists as hostages, threatening to launch chemical weapons at San Francisco unless his demands are met. The FBI recruits a chemical weapons expert and the only man to ever escape from Alcatraz to infiltrate the prison-fortress. This high-octane action thriller combines spectacular stunts with witty dialogue and explosive action sequences.", costars: ["Sean Connery", "Ed Harris"] },
            { title: "Con Air", year: 1997, genre: "Action", rating: 6.9, description: "Newly paroled ex-con and former Army Ranger Cameron Poe finds himself trapped aboard a prison transport plane when the passengers seize control. The plane is filled with some of the country's most dangerous criminals, led by the brilliant and deadly Cyrus 'The Virus' Grissom. Poe must survive the chaos while protecting the other passengers and stopping the criminals from carrying out their escape plan.", costars: ["John Cusack", "John Malkovich"] },
            { title: "Face/Off", year: 1997, genre: "Action", rating: 7.3, description: "FBI agent Sean Archer goes undercover using experimental surgery to take the face of terrorist Castor Troy. However, when Troy awakens from a coma and takes Archer's face, the two men are locked in a deadly game of cat and mouse while living each other's lives. John Woo's action masterpiece explores identity, family, and revenge through spectacular action sequences and emotional depth.", costars: ["John Travolta", "Joan Allen"] },
            { title: "City of Angels", year: 1998, genre: "Fantasy", rating: 6.7, description: "Seth is an angel who watches over Los Angeles, invisible to humans. When he falls in love with heart surgeon Maggie Rice, he faces an impossible choice: remain immortal and unable to experience human love, or give up his wings to be with her. This romantic fantasy explores themes of love, sacrifice, and what it means to be human.", costars: ["Meg Ryan", "Andre Braugher"] },
            { title: "Snake Eyes", year: 1998, genre: "Thriller", rating: 6.1, description: "Corrupt Atlantic City police detective Rick Santoro witnesses the assassination of the U.S. Secretary of Defense at a boxing match. As he investigates the murder, Rick uncovers a massive conspiracy involving military contracts and government corruption. Directed by Brian De Palma, this thriller uses elaborate camera work and paranoid atmosphere to tell a story of corruption and redemption.", costars: ["Gary Sinise", "Carla Gugino"] },
            { title: "8MM", year: 1999, genre: "Thriller", rating: 6.5, description: "Private investigator Tom Welles is hired to determine if a recently discovered film showing the murder of a young girl is real or fake. His investigation leads him into the dark world of underground pornography and snuff films. As Welles delves deeper, he risks losing his soul and his family in pursuit of the truth. This dark thriller explores the darkest corners of human nature.", costars: ["Joaquin Phoenix", "James Gandolfini"] },
            { title: "Bringing Out the Dead", year: 1999, genre: "Drama", rating: 6.8, description: "Burned-out paramedic Frank Pierce works the graveyard shift in New York City's Hell's Kitchen. Haunted by the patients he failed to save, Frank suffers from chronic insomnia and begins to crack under the pressure. Over three hellish nights, he encounters drug dealers, drunks, and the desperate while searching for redemption. Martin Scorsese's urban nightmare explores faith, salvation, and urban decay.", costars: ["Patricia Arquette", "John Goodman"] },
            
            // 2000s - Action Star Era
            { title: "Gone in 60 Seconds", year: 2000, genre: "Action", rating: 6.5, description: "Former car thief Memphis Raines must steal 50 cars in one night to save his brother's life from a dangerous crime boss. Assembling his old crew, Memphis faces his biggest challenge yet as he attempts the impossible heist while being pursued by police and rival criminals. This high-octane action thriller showcases elaborate car chases, exotic vehicles, and the brotherhood among thieves.", costars: ["Angelina Jolie", "Giovanni Ribisi"] },
            { title: "The Family Man", year: 2000, genre: "Fantasy", rating: 6.8, description: "Jack Campbell is a wealthy investment banker who gets a glimpse of what his life would have been like if he had stayed with his college girlfriend and chosen family over career. Waking up in an alternate reality where he's a family man in New Jersey instead of a Manhattan bachelor, Jack must choose between two very different lives. This Christmas fantasy explores the meaning of success and happiness.", costars: ["Téa Leoni", "Don Cheadle"] },
            { title: "Captain Corelli's Mandolin", year: 2001, genre: "Romance", rating: 5.9, description: "During World War II, the Greek island of Cephalonia is occupied by Italian forces. Captain Antonio Corelli, a cultured Italian officer and mandolin player, falls in love with Pelagia, a local woman engaged to a Greek resistance fighter. Their forbidden romance unfolds against the backdrop of war, exploring themes of love, honor, and the human cost of conflict.", costars: ["Penélope Cruz", "John Hurt"] },
            { title: "Windtalkers", year: 2002, genre: "War", rating: 6.1, description: "During World War II in the Pacific, U.S. Marines are assigned to protect Navajo code talkers whose native language serves as an unbreakable code. When the mission becomes compromised, the Marines face an impossible choice between protecting their charges and preventing the code from falling into enemy hands. John Woo directs this war drama about honor, sacrifice, and cultural identity.", costars: ["Adam Beach", "Peter Stormare"] },
            { title: "Adaptation", year: 2002, genre: "Comedy", rating: 7.7, description: "Screenwriter Charlie Kaufman struggles to adapt Susan Orlean's non-fiction book 'The Orchid Thief' into a screenplay. As Charlie battles writer's block and self-doubt, his story becomes increasingly meta and surreal. Cage plays both Charlie and his fictional twin brother Donald in this brilliant deconstruction of Hollywood, creativity, and the nature of storytelling itself.", costars: ["Meryl Streep", "Chris Cooper"] },
            { title: "Matchstick Men", year: 2003, genre: "Drama", rating: 7.3, description: "Roy Waller is a con artist with severe obsessive-compulsive disorder who discovers he has a teenage daughter. As Roy tries to build a relationship with Angela while planning his biggest con yet, his carefully ordered world begins to unravel. This character study explores themes of fatherhood, mental illness, and redemption through the lens of a criminal lifestyle.", costars: ["Sam Rockwell", "Alison Lohman"] },
            { title: "National Treasure", year: 2004, genre: "Adventure", rating: 6.9, description: "Historian Benjamin Franklin Gates believes there's a treasure map hidden on the back of the Declaration of Independence. When he steals the document to protect it from other treasure hunters, he must race against time to find the legendary treasure while being pursued by the FBI and rival treasure seekers. This family adventure combines American history with thrilling action.", costars: ["Diane Kruger", "Sean Bean"] },
            { title: "Lord of War", year: 2005, genre: "Crime", rating: 7.6, description: "Yuri Orlov becomes one of the world's most successful arms dealers, selling weapons to conflicts around the globe. As his business grows, he faces pressure from law enforcement, rival dealers, and his own conscience. This dark satire explores the international arms trade and the moral corruption that comes with profiting from war and violence.", costars: ["Ethan Hawke", "Jared Leto"] },
            { title: "The Weather Man", year: 2005, genre: "Drama", rating: 6.5, description: "Chicago weather forecaster Dave Spritz struggles with a failing marriage, troubled children, and public humiliation as people regularly throw food at him on the street. When he's offered a job on a national morning show in New York, Dave must decide whether success is worth leaving his family behind. This midlife crisis drama explores modern masculinity and the pursuit of meaning.", costars: ["Michael Caine", "Hope Davis"] },
            { title: "The Wicker Man", year: 2006, genre: "Horror", rating: 3.8, description: "Police officer Edward Malus travels to a remote island community to investigate the disappearance of a young girl. He discovers the island is ruled by a neo-pagan society led by women who may be planning a human sacrifice. This remake of the 1973 horror classic became infamous for Cage's over-the-top performance and unintentionally comedic moments.", costars: ["Ellen Burstyn", "Kate Beahan"] },
            { title: "World Trade Center", year: 2006, genre: "Drama", rating: 6.0, description: "Two Port Authority police officers become trapped in the rubble of the World Trade Center after the September 11 attacks. As their families anxiously wait for news, the officers struggle to survive while rescue workers race against time to find them. Oliver Stone's respectful drama focuses on heroism, survival, and the human spirit in the face of tragedy.", costars: ["Michael Peña", "Maggie Gyllenhaal"] },
            { title: "Ghost Rider", year: 2007, genre: "Superhero", rating: 5.3, description: "Motorcycle stuntman Johnny Blaze makes a deal with the devil to save his father's life, becoming the Ghost Rider, a supernatural bounty hunter. When the devil's son threatens to bring hell on Earth, Johnny must embrace his curse and use his demonic powers to stop him. This supernatural action film brings the Marvel Comics character to life with spectacular visual effects.", costars: ["Eva Mendes", "Wes Bentley"] },
            { title: "Next", year: 2007, genre: "Sci-Fi", rating: 6.2, description: "Cris Johnson has the ability to see two minutes into the future, which he uses for small-time magic shows and gambling. When government agents discover his power, they want to use him to prevent a nuclear terrorist attack. Based on Philip K. Dick's short story, this sci-fi thriller explores free will, destiny, and the consequences of seeing the future.", costars: ["Julianne Moore", "Jessica Biel"] },
            { title: "National Treasure: Book of Secrets", year: 2007, genre: "Adventure", rating: 6.2, description: "Ben Gates must prove his ancestor's innocence in the assassination of Abraham Lincoln by finding a hidden page from John Wilkes Booth's diary. His quest leads him to the legendary City of Gold and forces him to kidnap the President of the United States. This sequel expands the mythology while delivering more historical puzzles and action-adventure thrills.", costars: ["Diane Kruger", "Jon Voight"] },
            { title: "Bangkok Dangerous", year: 2008, genre: "Action", rating: 5.3, description: "A deaf-mute hitman travels to Bangkok for his final four jobs before retirement. When he breaks his own rules by forming relationships with a local woman and his young apprentice, his carefully controlled world begins to unravel. This remake of the 1999 Thai film explores themes of isolation, communication, and redemption in the criminal underworld.", costars: ["Shahkrit Yamnarm", "Charlie Yeung"] },
            { title: "Knowing", year: 2009, genre: "Sci-Fi", rating: 6.2, description: "Professor John Koestler discovers that a time capsule from 1959 contains a paper with numbers that accurately predict major disasters over the past 50 years. When he realizes the final numbers predict an upcoming global catastrophe, he races to prevent the end of the world while protecting his son. This apocalyptic thriller combines science fiction with supernatural elements.", costars: ["Rose Byrne", "Chandler Canterbury"] },
            { title: "National Treasure", year: 2004, genre: "Adventure", rating: 6.9, description: "Adventure film about American history ", costars: ["Diane Kruger", "Sean Bean"] },
            { title: "Lord of War", year: 2005, genre: "Crime", rating: 7.6, description: "Crime drama about an arms dealer who deals with arms", costars: ["Ethan Hawke", "Jared Leto"] },
            { title: "The Weather Man", year: 2005, genre: "Drama", rating: 6.5, description: "Drama about a weatherman's midlife crisis", costars: ["Michael Caine", "Hope Davis"] },
            { title: "The Wicker Man", year: 2006, genre: "Horror", rating: 3.8, description: "Horror remake about a pagan cult", costars: ["Ellen Burstyn", "Kate Beahan"] },
            { title: "World Trade Center", year: 2006, genre: "Drama", rating: 6.0, description: "Oliver Stone drama about 9/11", costars: ["Michael Peña", "Maggie Gyllenhaal"] },
            { title: "Ghost Rider", year: 2007, genre: "Superhero", rating: 5.3, description: "Superhero film about a motorcycle stuntman", costars: ["Eva Mendes", "Wes Bentley"] },
            { title: "Next", year: 2007, genre: "Sci-Fi", rating: 6.2, description: "Sci-fi thriller about seeing the future", costars: ["Julianne Moore", "Jessica Biel"] },
            { title: "National Treasure: Book of Secrets", year: 2007, genre: "Adventure", rating: 6.2, description: "Sequel to National Treasure", costars: ["Diane Kruger", "Jon Voight"] },
            { title: "Bangkok Dangerous", year: 2008, genre: "Action", rating: 5.3, description: "Action thriller about a hitman", costars: ["Shahkrit Yamnarm", "Charlie Yeung"] },
            { title: "Knowing", year: 2009, genre: "Sci-Fi", rating: 6.2, description: "Sci-fi thriller about predicting disasters", costars: ["Rose Byrne", "Chandler Canterbury"] },
            
            // 2010s - Mixed Period & Creative Resurgence
            { title: "Kick-Ass", year: 2010, genre: "Superhero", rating: 7.6, description: "When ordinary teenager Dave Lizewski decides to become a real-life superhero, he inspires others to follow suit. He teams up with Big Daddy, a former cop seeking revenge for his wife's murder, and his eleven-year-old daughter Hit-Girl, a pint-sized assassin. This violent superhero satire deconstructs comic book tropes while delivering brutal action and dark humor.", costars: ["Aaron Taylor-Johnson", "Chloë Grace Moretz"] },
            { title: "The Sorcerer's Apprentice", year: 2010, genre: "Fantasy", rating: 6.1, description: "Balthazar Blake, a master sorcerer in modern-day Manhattan, tries to defend the city from his arch-nemesis Maxim Horvath. When Balthazar can't do it alone, he recruits Dave Stutler, a seemingly average guy who demonstrates hidden potential, as his reluctant protégé. This modern fantasy adventure brings magic to contemporary New York with spectacular special effects.", costars: ["Jay Baruchel", "Alfred Molina"] },
            { title: "Season of the Witch", year: 2011, genre: "Fantasy", rating: 5.4, description: "Medieval knights Behmen and Felson return from the Crusades to find their homeland ravaged by the Black Death. When they're commissioned to transport a suspected witch to a remote abbey where monks can perform a ritual to end the plague, they embark on a perilous journey through haunted forests and supernatural dangers.", costars: ["Ron Perlman", "Claire Foy"] },
            { title: "Drive Angry", year: 2011, genre: "Action", rating: 5.4, description: "John Milton escapes from hell to save his granddaughter from a satanic cult that murdered his daughter. Driving a souped-up muscle car and armed with supernatural weapons, Milton races across the American South while being pursued by both the cult and The Accountant, a mysterious figure sent from hell to bring him back. This grindhouse-style action film embraces over-the-top violence and dark humor.", costars: ["Amber Heard", "William Fichtner"] },
            { title: "Ghost Rider: Spirit of Vengeance", year: 2011, genre: "Superhero", rating: 4.3, description: "Johnny Blaze hides in Eastern Europe, struggling to control the curse of the Ghost Rider. When a secret sect asks him to save a boy from the devil, Johnny sees a chance to rid himself of the demon forever. This sequel takes a darker, grittier approach to the supernatural anti-hero while exploring themes of redemption and sacrifice.", costars: ["Ciarán Hinds", "Violante Placido"] },
            { title: "Trespass", year: 2011, genre: "Thriller", rating: 5.3, description: "A home invasion thriller about a diamond dealer and his family who are held hostage by criminals seeking a hidden fortune. As the night progresses, secrets are revealed and alliances shift in this tense psychological thriller. The film explores themes of greed, desperation, and the lengths people will go to protect their families.", costars: ["Nicole Kidman", "Ben Mendelsohn"] },
            { title: "Seeking Justice", year: 2011, genre: "Thriller", rating: 6.2, description: "After his wife is brutally attacked, English teacher Will Gerard is approached by a mysterious organization called 'The System' that offers to exact revenge in exchange for a future favor. When they call in their debt, Will discovers he's become part of a vigilante network with deadly consequences. This thriller explores justice, revenge, and moral compromise.", costars: ["January Jones", "Guy Pearce"] },
            { title: "Stolen", year: 2012, genre: "Action", rating: 5.5, description: "Former master thief Will Montgomery's daughter is kidnapped by his former partner Vincent, who demands Will steal $10 million in 12 hours or his daughter dies. Racing against time through New Orleans during Mardi Gras, Will must use all his skills to save his daughter while staying ahead of both the FBI and Vincent's deadly plans.", costars: ["Josh Lucas", "Danny Huston"] },
            { title: "The Croods", year: 2013, genre: "Animation", rating: 7.0, description: "Grug Crood is an overprotective caveman father whose family lives in fear of the dangers outside their cave. When their world is destroyed, they're forced to embark on their first family road trip through a spectacular and unfamiliar landscape filled with incredible creatures. This animated adventure celebrates family, courage, and embracing change. Cage voices the patriarch Grug with warmth and humor.", costars: ["Emma Stone", "Ryan Reynolds"] },
            { title: "The Frozen Ground", year: 2013, genre: "Crime", rating: 6.4, description: "Based on true events, Alaska State Trooper Jack Halcombe investigates a series of murders committed by Robert Hansen, who kidnapped and tortured young women in the Alaskan wilderness. When one victim escapes, she becomes the key witness in bringing down the serial killer. This crime thriller explores the cat-and-mouse game between law enforcement and a cunning predator.", costars: ["John Cusack", "Vanessa Hudgens"] },
            { title: "Joe", year: 2013, genre: "Drama", rating: 6.9, description: "Joe Ransom is an ex-con struggling to make a better life while managing his violent temper. When he meets Gary, a teenage boy desperate to escape his abusive alcoholic father, Joe becomes an unlikely mentor. This Southern Gothic drama explores masculinity, redemption, and the cycle of violence in rural America. Cage delivers one of his most restrained and powerful performances.", costars: ["Tye Sheridan", "Gary Poulter"] },
            { title: "Rage", year: 2014, genre: "Action", rating: 5.0, description: "When his daughter is killed during a home invasion, Paul Maguire seeks revenge against the Russian mobsters he believes are responsible. As he embarks on a violent quest for vengeance, Paul's past as a criminal comes back to haunt him, forcing him to confront the choices that led to this tragedy. This action thriller explores the cost of violence and the cycle of revenge.", costars: ["Rachel Nichols", "Peter Stormare"] },
            { title: "Left Behind", year: 2014, genre: "Thriller", rating: 3.1, description: "When millions of people suddenly vanish in the Rapture, airline pilot Rayford Steele must safely land his plane full of panicked passengers while chaos erupts around the world. Based on the bestselling novel series, this apocalyptic thriller explores faith, salvation, and survival in the face of biblical prophecy coming true.", costars: ["Chad Michael Murray", "Cassi Thomson"] },
            { title: "Outcast", year: 2014, genre: "Action", rating: 4.4, description: "A mysterious warrior known as White Ghost helps a young prince reclaim his rightful throne from his tyrannical older brother. Set in ancient China, this martial arts epic follows themes of redemption, honor, and the price of violence. Despite its Eastern setting, the film struggles with cultural authenticity and coherent storytelling.", costars: ["Hayden Christensen", "Liu Yifei"] },
            { title: "The Dying of the Light", year: 2014, genre: "Thriller", rating: 4.5, description: "Veteran CIA agent Evan Lake is forced into retirement when he develops dementia, but he embarks on one final mission to track down the terrorist who tortured him decades earlier. As his mental faculties deteriorate, Lake must race against time and his own failing mind to complete his quest for revenge.", costars: ["Anton Yelchin", "Irène Jacob"] },
            { title: "Pay the Ghost", year: 2015, genre: "Horror", rating: 5.2, description: "Professor Mike Lawford's son disappears during Halloween night, and exactly one year later, Mike begins seeing and hearing his son's ghostly presence. As he investigates the supernatural occurrences, he discovers a centuries-old Celtic ritual that may be connected to his son's disappearance. This supernatural horror explores parental guilt and the lengths a father will go to save his child.", costars: ["Sarah Wayne Callies", "Veronica Ferres"] },
            { title: "The Runner", year: 2015, genre: "Drama", rating: 4.7, description: "Louisiana congressman Colin Pryce's political career implodes after a sex scandal during the BP oil spill crisis. As he attempts to rebuild his life and reputation, Colin must confront his personal demons while dealing with the environmental and political fallout of the disaster. This political drama explores corruption, redemption, and the cost of ambition.", costars: ["Connie Nielsen", "Sarah Paulson"] },
            { title: "Dog Eat Dog", year: 2016, genre: "Crime", rating: 4.7, description: "Three ex-cons are hired by an eccentric crime boss to kidnap a baby for ransom. When their simple job goes horribly wrong, the trio finds themselves in a violent, surreal nightmare. Paul Schrader's crime thriller embraces exploitation film aesthetics while exploring themes of desperation and moral decay in contemporary America.", costars: ["Willem Dafoe", "Christopher Matthew Cook"] },
            { title: "Snowden", year: 2016, genre: "Biography", rating: 7.3, description: "The story of Edward Snowden's transformation from a CIA employee to one of the most wanted men in the world after he leaked classified NSA documents revealing illegal surveillance programs. Oliver Stone's biographical thriller explores privacy, government overreach, and the cost of whistleblowing in the digital age. Cage plays CIA Deputy Director Corbin O'Brian.", costars: ["Joseph Gordon-Levitt", "Shailene Woodley"] },
            { title: "Arsenal", year: 2017, genre: "Action", rating: 4.0, description: "When his brother is kidnapped by a ruthless crime boss, Mikey must infiltrate the criminal underworld to save him. As he delves deeper into the violent world of organized crime, Mikey discovers that rescue will require him to become the very thing he despises. This crime thriller explores family loyalty and the corrupting influence of violence.", costars: ["John Cusack", "Adrian Grenier"] },
            { title: "The Humanity Bureau", year: 2017, genre: "Sci-Fi", rating: 4.6, description: "In a dystopian future America ravaged by climate change, government agent Noah Kross determines which citizens are productive enough to remain in society. When he's ordered to exile a woman and her son, Noah begins to question the system he serves. This science fiction thriller explores themes of environmental collapse, authoritarianism, and moral awakening.", costars: ["Sarah Lind", "Jakob Davies"] },
            { title: "Vengeance: A Love Story", year: 2017, genre: "Thriller", rating: 5.2, description: "When a single mother and her daughter are brutally attacked, detective John Dromoor becomes obsessed with bringing the perpetrators to justice. As the legal system fails the victims, Dromoor takes matters into his own hands in this vigilante thriller that explores justice, revenge, and the failure of institutions to protect the innocent.", costars: ["Don Johnson", "Anna Hutchison"] },
            { title: "Mom and Dad", year: 2017, genre: "Horror", rating: 5.5, description: "A mysterious mass hysteria causes parents to turn violently against their own children. As chaos erupts across suburbia, teenagers Carly and Josh must survive when their own parents join the murderous rampage. This dark horror-comedy satirizes suburban family life while delivering intense psychological terror and black humor.", costars: ["Selma Blair", "Anne Winters"] },
            { title: "Mandy", year: 2018, genre: "Horror", rating: 6.5, description: "Red Miller lives a peaceful life in the Shadow Mountains with his artist girlfriend Mandy Bloom until a psychotic religious cult murders her in a ritualistic killing. Driven by grief and rage, Red embarks on a supernatural quest for revenge that leads him through a nightmarish landscape of violence and horror. This psychedelic revenge film is both art house cinema and grindhouse exploitation.", costars: ["Andrea Riseborough", "Linus Roache"] },
            { title: "Spider-Man: Into the Spider-Verse", year: 2018, genre: "Animation", rating: 8.4, description: "When teenager Miles Morales is bitten by a radioactive spider, he gains spider powers and must learn to be a hero. After a dimensional rift opens, he meets other Spider-People from different realities who must work together to save all their worlds. Cage voices Spider-Man Noir, a 1930s detective version of the web-slinger in this groundbreaking animated masterpiece.", costars: ["Shameik Moore", "Jake Johnson"] },
            { title: "Between Worlds", year: 2018, genre: "Thriller", rating: 4.0, description: "Truck driver Joe meets Julie, a woman with the supernatural ability to communicate with spirits of the dead. When Julie's teenage daughter falls into a coma, her spirit becomes trapped between worlds, and Joe must help Julie navigate the dangerous spiritual realm to save her. This supernatural thriller explores love, loss, and the connection between life and death.", costars: ["Franka Potente", "Penelope Mitchell"] },
            { title: "Color Out of Space", year: 2019, genre: "Horror", rating: 6.2, description: "Based on H.P. Lovecraft's short story, a meteorite crashes near the Gardner family farm, bringing with it an otherworldly color that gradually infects everything it touches. As the alien presence corrupts the land, water, and inhabitants, the family faces a cosmic horror beyond human comprehension. This science fiction horror captures Lovecraft's themes of cosmic dread and mankind's insignificance.", costars: ["Joely Richardson", "Madeleine Arthur"] },
            { title: "Primal", year: 2019, genre: "Action", rating: 4.9, description: "Big-game hunter Frank Walsh transports captured animals on a ship bound for the U.S., including a rare white jaguar and Richard Loffler, a dangerous assassin being extradited. When Loffler escapes and releases the animals, the ship becomes a floating battleground. This action thriller combines survival horror with man-versus-beast scenarios in an enclosed setting.", costars: ["Famke Janssen", "Kevin Durand"] },
            
            // 2020s - Current Renaissance
            { title: "The Croods: A New Age", year: 2020, genre: "Animation", rating: 7.0, description: "The Crood family searches for a new home and discovers their only hope for survival is another family called the Bettermans, who claim to be more evolved. When the two families clash over their different ways of life, they must learn to work together to face a new threat. Cage returns as Grug, the overprotective patriarch learning to trust his family's independence.", costars: ["Emma Stone", "Ryan Reynolds"] },
            { title: "Jiu Jitsu", year: 2020, genre: "Action", rating: 2.9, description: "Every six years, an ancient order of Jiu Jitsu fighters must defeat an alien invader to save Earth. When the prophecied hero Jake Barnes suffers amnesia, a team of fighters led by Wylie must prepare for the ultimate battle. This science fiction martial arts film combines interdimensional warfare with hand-to-hand combat in an ambitious but poorly executed premise.", costars: ["Alain Moussi", "Frank Grillo"] },
            { title: "Willy's Wonderland", year: 2021, genre: "Horror", rating: 5.5, description: "A quiet drifter's car breaks down in a remote town, and to pay for repairs, he agrees to spend the night cleaning an abandoned family entertainment center. What he doesn't know is that the facility's animatronic characters come to life and hunt humans. In this horror-comedy that pays homage to Five Nights at Freddy's, Cage delivers a virtually silent performance while battling killer robots.", costars: ["Emily Tosta", "Beth Grant"] },
            { title: "Pig", year: 2021, genre: "Drama", rating: 6.9, description: "Rob, a truffle hunter living alone in the Oregon wilderness, must return to Portland when his beloved foraging pig is kidnapped. As he searches for his pig, Rob confronts his past and the high-end culinary world he left behind. This meditative drama about grief, loss, and human connection showcases Cage's most restrained and emotionally powerful performance in years.", costars: ["Alex Wolff", "Adam Arkin"] },
            { title: "Prisoners of the Ghostland", year: 2021, genre: "Action", rating: 4.2, description: "In the treacherous frontier town of Samurai Town, a ruthless bank robber is sprung from jail by wealthy warlord The Governor, whose adopted granddaughter Bernice has gone missing. The criminal must wear a leather suit rigged with self-destructing devices and find the missing woman within five days. Sion Sono's post-apocalyptic western combines samurai aesthetics with Mad Max-style chaos.", costars: ["Sofia Boutella", "Bill Moseley"] },
            { title: "The Unbearable Weight of Massive Talent", year: 2022, genre: "Comedy", rating: 7.0, description: "A fictionalized version of Nicolas Cage struggles with his career and massive debt. When he's offered $1 million to attend a billionaire's birthday party, he discovers his host is a drug cartel kingpin who has kidnapped the daughter of a Mexican politician. This meta-comedy celebrates and parodies Cage's career while delivering genuine action and laughs.", costars: ["Pedro Pascal", "Tiffany Haddish"] },
            { title: "The Old Way", year: 2023, genre: "Western", rating: 5.3, description: "Retired gunslinger Colton Briggs has hung up his guns and settled down with his wife and young daughter. When his wife is murdered by outlaws, Briggs is forced to pick up his weapons once more and seek revenge, accompanied by his precocious 12-year-old daughter. This traditional western marks Cage's first entry into the genre, exploring themes of violence, family, and redemption.", costars: ["Ryan Kiera Armstrong", "Clint Howard"] },
            { title: "Renfield", year: 2023, genre: "Horror", rating: 6.4, description: "R.M. Renfield, Dracula's henchman and inmate at a lunatic asylum for decades, longs for a life away from his master. When he falls in love with traffic cop Rebecca Quincy, Renfield begins to question his toxic relationship with his boss. This horror-comedy reimagines the classic Dracula story from the perspective of the long-suffering familiar, with Cage playing a flamboyant, narcissistic Count Dracula.", costars: ["Nicholas Hoult", "Awkwafina"] },
            { title: "Dream Scenario", year: 2023, genre: "Comedy", rating: 6.9, description: "Paul Matthews, a hapless family man and college professor, finds himself featured in other people's dreams for no discernible reason. As Paul becomes a celebrity overnight, the dreams turn into nightmares, and his life spirals out of control. This surreal dark comedy explores fame, social media, and the absurdity of viral culture through an impossible premise.", costars: ["Julianne Nicholson", "Michael Cera"] },
            { title: "The Flash", year: 2023, genre: "Superhero", rating: 5.6, description: "Barry Allen uses his super speed to change the past and create a world without superheroes, but his actions create unintended consequences. In this alternate timeline, Zod threatens Earth, and Barry must team up with an alternate version of Batman and rescue an imprisoned Kryptonian to save the world. Cage appears as Superman in a multiverse sequence, finally realizing his dream of playing the Man of Steel.", costars: ["Ezra Miller", "Michael Keaton"] },
            { title: "Sympathy for the Devil", year: 2023, genre: "Thriller", rating: 5.5, description: "After being forced to drive a mysterious passenger at gunpoint, a man finds himself in a high-stakes game of cat and mouse where it becomes clear that not everything is as it seems. Set almost entirely in a car, this psychological thriller explores paranoia, identity, and moral ambiguity through intense dialogue and escalating tension.", costars: ["Joel Kinnaman", "Kaiwi Lyman"] },
            { title: "Arcadian", year: 2024, genre: "Horror", rating: 6.1, description: "In a post-apocalyptic world overrun by ferocious creatures, Paul and his twin teenage sons live in a remote farmhouse, struggling to survive. When the boys become separated during a scavenging mission, Paul must venture into the dangerous outside world to find them. This creature feature explores fatherhood, survival, and family bonds in a hostile environment.", costars: ["Jaeden Martell", "Maxwell Jenkins"] },
            { title: "Longlegs", year: 2024, genre: "Horror", rating: 6.8, description: "FBI agent Lee Harker is assigned to an unsolved serial killer case that takes a personal turn when she discovers evidence of the occult. As Harker gets closer to the truth, she realizes the killer, known as Longlegs, may be connected to her own past. Cage delivers a chilling performance as the titular serial killer in this atmospheric horror thriller that combines police procedural with supernatural dread.", costars: ["Maika Monroe", "Alicia Witt"] },
            
            // TV Shows & Specials
            { title: "Saturday Night Live", year: 1992, genre: "Comedy", rating: 6.5, description: "Cage hosted this iconic late-night sketch comedy show during its seventeenth season, showcasing his comedic timing and willingness to parody himself. His appearance included memorable sketches that played on his intense acting style and growing reputation as an unconventional performer. The episode demonstrated his versatility beyond dramatic roles.", costars: ["Various SNL Cast"] },
            { title: "The Simpsons", year: 2005, genre: "Animation", rating: 7.2, description: "Cage provided the voice for a character in the long-running animated series, joining the show's tradition of featuring celebrity guest stars. His appearance in the show added to his pop culture legacy and demonstrated his appeal across different entertainment mediums. The episode showcased his distinctive voice work in the animated format.", costars: ["Dan Castellaneta", "Julie Kavner"] },
            { title: "Robot Chicken", year: 2012, genre: "Animation", rating: 6.8, description: "Cage lent his voice to multiple characters in this stop-motion animated sketch comedy series known for its pop culture parodies and celebrity impressions. His participation in the show allowed for both tribute and gentle mockery of his film career, fitting perfectly with the show's irreverent humor and nostalgic references.", costars: ["Seth Green", "Matthew Senreich"] },
            { title: "The Twilight Zone", year: 2019, genre: "Sci-Fi", rating: 6.1, description: "Cage appeared in Jordan Peele's revival of the classic anthology series, starring in an episode that explored themes of identity and technology. His performance brought his signature intensity to the show's tradition of thought-provoking science fiction storytelling, continuing the series' legacy of featuring prominent actors in standalone stories.", costars: ["Jordan Peele"] },
            { title: "History of Swear Words", year: 2021, genre: "Documentary", rating: 6.3, description: "Cage hosted this Netflix documentary series that explores the origins, pop culture usage, science, and cultural impact of curse words. Each episode focuses on a different expletive, combining humor with historical and linguistic analysis. His enthusiastic hosting style and obvious enjoyment of the subject matter made for entertaining and educational television.", costars: ["Various Experts"] },
        
            { title: "Sympathy for the Devil", year: 2023, genre: "Thriller", rating: 5.5, description: "After being forced to drive a mysterious passenger at gunpoint, a man finds himself in a high-stakes game of cat and mouse where it becomes clear that not everything is as it seems. Set almost entirely in a car, this psychological thriller explores paranoia, identity, and moral ambiguity through intense dialogue and escalating tension.", costars: ["Joel Kinnaman", "Kaiwi Lyman"] },
            { title: "Arcadian", year: 2024, genre: "Horror", rating: 6.1, description: "In a post-apocalyptic world overrun by ferocious creatures, Paul and his twin teenage sons live in a remote farmhouse, struggling to survive. When the boys become separated during a scavenging mission, Paul must venture into the dangerous outside world to find them. This creature feature explores fatherhood, survival, and family bonds in a hostile environment.", costars: ["Jaeden Martell", "Maxwell Jenkins"] },
            { title: "Longlegs", year: 2024, genre: "Horror", rating: 6.8, description: "FBI agent Lee Harker is assigned to an unsolved serial killer case that takes a personal turn when she discovers evidence of the occult. As Harker gets closer to the truth, she realizes the killer, known as Longlegs, may be connected to her own past. Cage delivers a chilling performance as the titular serial killer in this atmospheric horror thriller that combines police procedural with supernatural dread.", costars: ["Maika Monroe", "Alicia Witt"] },
            
            // TV Shows & Specials
            { title: "Saturday Night Live", year: 1992, genre: "Comedy", rating: 6.5, description: "Cage hosted this iconic late-night sketch comedy show during its seventeenth season, showcasing his comedic timing and willingness to parody himself. His appearance included memorable sketches that played on his intense acting style and growing reputation as an unconventional performer. The episode demonstrated his versatility beyond dramatic roles.", costars: ["Various SNL Cast"] },
            { title: "The Simpsons", year: 2005, genre: "Animation", rating: 7.2, description: "Cage provided the voice for a character in the long-running animated series, joining the show's tradition of featuring celebrity guest stars. His appearance in the show added to his pop culture legacy and demonstrated his appeal across different entertainment mediums. The episode showcased his distinctive voice work in the animated format.", costars: ["Dan Castellaneta", "Julie Kavner"] },
            { title: "Robot Chicken", year: 2012, genre: "Animation", rating: 6.8, description: "Cage lent his voice to multiple characters in this stop-motion animated sketch comedy series known for its pop culture parodies and celebrity impressions. His participation in the show allowed for both tribute and gentle mockery of his film career, fitting perfectly with the show's irreverent humor and nostalgic references.", costars: ["Seth Green", "Matthew Senreich"] },
            { title: "The Twilight Zone", year: 2019, genre: "Sci-Fi", rating: 6.1, description: "Cage appeared in Jordan Peele's revival of the classic anthology series, starring in an episode that explored themes of identity and technology. His performance brought his signature intensity to the show's tradition of thought-provoking science fiction storytelling, continuing the series' legacy of featuring prominent actors in standalone stories.", costars: ["Jordan Peele"] },
            { title: "History of Swear Words", year: 2021, genre: "Documentary", rating: 6.3, description: "Cage hosted this Netflix documentary series that explores the origins, pop culture usage, science, and cultural impact of curse words. Each episode focuses on a different expletive, combining humor with historical and linguistic analysis. His enthusiastic hosting style and obvious enjoyment of the subject matter made for entertaining and educational television.", costars: ["Various Experts"] }
        ];

        // Filter state variables
        let currentFilters = {
            search: '',
            timePeriod: 'all',
            genre: 'all',
            minRating: 0,
            sortBy: 'year-desc'
        };

        // Generate star rating display
        function generateStars(rating) {
            const fullStars = Math.floor(rating / 2);
            const halfStar = rating % 2 >= 1;
            const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);
            
            let stars = '';
            for (let i = 0; i < fullStars; i++) stars += '★';
            if (halfStar) stars += '☆';
            for (let i = 0; i < emptyStars; i++) stars += '☆';
            
            return stars;
        }

        // Get unique genres
        function getUniqueGenres() {
            const genres = [...new Set(nicolasCageMovies.map(movie => movie.genre))];
            return genres.sort();
        }

        // Filter movies based on current filters
        function filterMovies(movies = nicolasCageMovies) {
            let filtered = [...movies];

            // Apply search filter
            if (currentFilters.search) {
                const searchTerm = currentFilters.search.toLowerCase();
                filtered = filtered.filter(movie =>
                    movie.title.toLowerCase().includes(searchTerm) ||
                    movie.description.toLowerCase().includes(searchTerm) ||
                    movie.costars.some(costar => costar.toLowerCase().includes(searchTerm)) ||
                    movie.genre.toLowerCase().includes(searchTerm)
                );
            }

            // Apply time period filter
            if (currentFilters.timePeriod !== 'all') {
                const decade = currentFilters.timePeriod;
                let startYear, endYear;
                
                switch (decade) {
                    case '1980s':
                        startYear = 1980; endYear = 1989;
                        break;
                    case '1990s':
                        startYear = 1990; endYear = 1999;
                        break;
                    case '2000s':
                        startYear = 2000; endYear = 2009;
                        break;
                    case '2010s':
                        startYear = 2010; endYear = 2019;
                        break;
                    case '2020s':
                        startYear = 2020; endYear = 2029;
                        break;
                }
                
                filtered = filtered.filter(movie => movie.year >= startYear && movie.year <= endYear);
            }

            // Apply genre filter
            if (currentFilters.genre !== 'all') {
                filtered = filtered.filter(movie => movie.genre === currentFilters.genre);
            }

            // Apply rating filter
            filtered = filtered.filter(movie => movie.rating >= currentFilters.minRating);

            // Apply sorting
            filtered.sort((a, b) => {
                switch (currentFilters.sortBy) {
                    case 'year-desc':
                        return b.year - a.year;
                    case 'year-asc':
                        return a.year - b.year;
                    case 'title-asc':
                        return a.title.localeCompare(b.title);
                    case 'title-desc':
                        return b.title.localeCompare(a.title);
                    case 'rating-desc':
                        return b.rating - a.rating;
                    case 'rating-asc':
                        return a.rating - b.rating;
                    default:
                        return 0;
                }
            });

            return filtered;
        }

        // Update results counter
        function updateResultsCounter(filteredMovies) {
            const counter = document.getElementById('resultsCounter');
            const total = nicolasCageMovies.length;
            const shown = filteredMovies.length;
            
            if (shown === total) {
                counter.textContent = `Showing all ${total} movies`;
            } else {
                counter.textContent = `Showing ${shown} of ${total} movies`;
            }
        }

        // Initialize filter buttons
        function initializeFilterButtons() {
            // Initialize genre filter buttons
            const genreContainer = document.getElementById('genreFilterButtons');
            const genres = getUniqueGenres();
            
            genreContainer.innerHTML = '<button class="genre-filter-btn active" data-genre="all" onclick="setGenreFilter(\'all\')">All Genres</button>';
            
            genres.forEach(genre => {
                const button = document.createElement('button');
                button.className = 'genre-filter-btn';
                button.setAttribute('data-genre', genre);
                button.textContent = genre;
                button.onclick = () => setGenreFilter(genre);
                genreContainer.appendChild(button);
            });

            // Initialize time period filter buttons
            const timeButtons = document.querySelectorAll('.time-filter-btn');
            timeButtons.forEach(button => {
                const period = button.getAttribute('data-period');
                button.onclick = () => setTimePeriodFilter(period);
            });

            // Initialize rating slider
            const ratingSlider = document.getElementById('ratingSlider');
            const ratingDisplay = document.getElementById('ratingDisplay');
            
            ratingSlider.oninput = () => {
                const value = parseFloat(ratingSlider.value);
                currentFilters.minRating = value;
                ratingDisplay.textContent = `${value}+ ⭐`;
                applyFiltersAndUpdate();
            };

            // Initialize sort dropdown
            const sortSelect = document.getElementById('sortSelect');
            sortSelect.onchange = () => {
                currentFilters.sortBy = sortSelect.value;
                applyFiltersAndUpdate();
            };
        }

        // Set time period filter
        function setTimePeriodFilter(period) {
            currentFilters.timePeriod = period;
            
            // Update button states
            document.querySelectorAll('.time-filter-btn').forEach(btn => {
                btn.classList.remove('active');
                if (btn.getAttribute('data-period') === period) {
                    btn.classList.add('active');
                }
            });
            
            applyFiltersAndUpdate();
        }

        // Set genre filter
        function setGenreFilter(genre) {
            currentFilters.genre = genre;
            
            // Update button states
            document.querySelectorAll('.genre-filter-btn').forEach(btn => {
                btn.classList.remove('active');
                if (btn.getAttribute('data-genre') === genre) {
                    btn.classList.add('active');
                }
            });
            
            applyFiltersAndUpdate();
        }

        // Clear all filters
        function clearAllFilters() {
            currentFilters = {
                search: '',
                timePeriod: 'all',
                genre: 'all',
                minRating: 0,
                sortBy: 'year-desc'
            };

            // Reset UI elements
            document.getElementById('allMoviesSearch').value = '';
            document.getElementById('ratingSlider').value = 0;
            document.getElementById('ratingDisplay').textContent = '0+ ⭐';
            document.getElementById('sortSelect').value = 'year-desc';

            // Reset button states
            document.querySelectorAll('.time-filter-btn').forEach(btn => {
                btn.classList.remove('active');
                if (btn.getAttribute('data-period') === 'all') {
                    btn.classList.add('active');
                }
            });

            document.querySelectorAll('.genre-filter-btn').forEach(btn => {
                btn.classList.remove('active');
                if (btn.getAttribute('data-genre') === 'all') {
                    btn.classList.add('active');
                }
            });

            applyFiltersAndUpdate();
        }

        // Apply filters and update display
        function applyFiltersAndUpdate() {
            const filteredMovies = filterMovies();
            const allMoviesGrid = document.getElementById('allMoviesGrid');
            displayMovies(filteredMovies, allMoviesGrid);
            updateResultsCounter(filteredMovies);
        }

        // Loading screen functionality
        let loadingProgress = 0;
        const loadingInterval = setInterval(() => {
            loadingProgress += Math.random() * 15;
            document.getElementById('loadingProgress').style.width = Math.min(loadingProgress, 100) + '%';
            
            if (loadingProgress >= 100) {
                clearInterval(loadingInterval);
                setTimeout(() => {
                    document.getElementById('loadingScreen').classList.add('hidden');
                    document.getElementById('mainPage').classList.add('visible');
                }, 500);
            }
        }, 200);

        // Menu functionality
        document.getElementById('menuToggle').addEventListener('click', () => {
            const sidebar = document.getElementById('sidebar');
            const overlay = document.getElementById('overlay');
            sidebar.classList.toggle('open');
            overlay.classList.toggle('visible');
        });

        document.getElementById('overlay').addEventListener('click', () => {
            document.getElementById('sidebar').classList.remove('open');
            document.getElementById('overlay').classList.remove('visible');
        });

        // Genre circles functionality
        let genresVisible = false;
        
        function showGenres() {
            const genreCircles = document.getElementById('genreCircles');
            
            if (genresVisible) {
                genreCircles.classList.remove('visible');
                genresVisible = false;
                return;
            }
            
            const genres = getUniqueGenres();
            genreCircles.innerHTML = '';
            
            const radius = 200;
            const centerX = 0;
            const centerY = 0;
            const totalGenres = genres.length;
            const angleStep = (2 * Math.PI) / totalGenres;
            
            genres.forEach((genre, index) => {
                const angle = (index * angleStep) - (Math.PI / 2);
                const x = centerX + radius * Math.cos(angle);
                const y = centerY + radius * Math.sin(angle);
                
                const circle = document.createElement('div');
                circle.className = 'genre-circle';
                circle.style.left = `${x}px`;
                circle.style.top = `${y}px`;
                circle.style.transform = 'translate(-50%, -50%)';
                circle.textContent = genre;
                circle.onclick = (e) => {
                    e.stopPropagation();
                    openGenreMovies(genre);
                };
                
                circle.style.animationDelay = `${index * 0.1}s`;
                genreCircles.appendChild(circle);
            });
            
            genreCircles.classList.add('visible');
            genresVisible = true;
        }

        // Open movie details page
        function openMovieDetails(movie) {
            const detailsPage = document.getElementById('movieDetailsPage');
            const detailsContent = document.getElementById('movieDetailsContent');
            const detailsTitle = document.getElementById('movieDetailsTitle');
            
            detailsTitle.textContent = movie.title;
            
            detailsContent.innerHTML = `
                <div class="movie-info">
                    <h1 class="movie-details-title">${movie.title}</h1>
                    <div class="movie-details-year">${movie.year}</div>
                    
                    <div class="movie-details-rating">
                        <span class="large-star-rating">${generateStars(movie.rating)}</span>
                        <span class="large-rating-number">${movie.rating}/10</span>
                    </div>
                    
                    <div class="movie-details-section">
                        <div class="section-title">Genre</div>
                        <div class="section-content">
                            <span class="genre-tag">${movie.genre}</span>
                        </div>
                    </div>
                    
                    <div class="movie-details-section">
                        <div class="section-title">Description</div>
                        <div class="section-content">${movie.description}</div>
                    </div>
                    
                    <div class="movie-details-section">
                        <div class="section-title">Co-Stars</div>
                        <div class="section-content">
                            <div class="costars-list">
                                ${movie.costars.map(costar => `<span class="costar-tag">${costar}</span>`).join('')}
                            </div>
                        </div>
                    </div>
                </div>
            `;
            
            detailsPage.classList.add('visible');
        }

        // Close movie details page
        function closeMovieDetails() {
            document.getElementById('movieDetailsPage').classList.remove('visible');
        }

        // Display movies function
        function displayMovies(movies, container) {
            container.innerHTML = '';
            
            movies.forEach(movie => {
                const movieCard = document.createElement('div');
                movieCard.className = 'movie-card';
                movieCard.onclick = () => openMovieDetails(movie);
                movieCard.innerHTML = `
                    <div class="movie-title">${movie.title}</div>
                    <div class="movie-year">${movie.year}</div>
                    <div class="movie-genre">${movie.genre}</div>
                    <div class="movie-rating">
                        <span class="star-rating">${generateStars(movie.rating)}</span>
                        <span class="rating-number">${movie.rating}/10</span>
                    </div>
                    <div class="movie-description">${movie.description}</div>
                `;
                
                container.appendChild(movieCard);
            });
            
            if (movies.length === 0) {
                container.innerHTML = '<div style="text-align: center; color: #666; font-size: 1.2rem; padding: 50px;">No movies found matching your criteria.</div>';
            }
        }

        // Movie page functionality
        function openGenreMovies(genre) {
            document.getElementById('genreCircles').classList.remove('visible');
            genresVisible = false;
            
            document.getElementById('genreTitle').textContent = `${genre} Movies`;
            const moviesGrid = document.getElementById('moviesGrid');
            const genreMovies = nicolasCageMovies.filter(movie => movie.genre === genre);
            
            displayMovies(genreMovies, moviesGrid);
            document.getElementById('moviePage').classList.add('visible');
            
            const searchBox = document.getElementById('genreSearch');
            searchBox.oninput = () => {
                const searchTerm = searchBox.value.toLowerCase();
                const filteredMovies = genreMovies.filter(movie =>
                    movie.title.toLowerCase().includes(searchTerm) ||
                    movie.description.toLowerCase().includes(searchTerm) ||
                    movie.costars.some(costar => costar.toLowerCase().includes(searchTerm))
                );
                displayMovies(filteredMovies, moviesGrid);
            };
        }

        function closeMoviePage() {
            document.getElementById('moviePage').classList.remove('visible');
            genresVisible = false;
        }

        // All movies page functionality
        function openAllMovies() {
            // Close sidebar and overlay
            document.getElementById('sidebar').classList.remove('open');
            document.getElementById('overlay').classList.remove('visible');
            
            // Hide genre circles if visible
            document.getElementById('genreCircles').classList.remove('visible');
            genresVisible = false;
            
            // Close any other open pages first
            document.getElementById('moviePage').classList.remove('visible');
            document.getElementById('actorDetailsPage').classList.remove('visible');
            document.getElementById('movieDetailsPage').classList.remove('visible');
            document.getElementById('mainPage').classList.remove('visible');
            
            // Initialize filters every time to ensure functionality
            initializeFilterButtons();
            
            // Apply current filters and display
            applyFiltersAndUpdate();
            document.getElementById('allMoviesPage').classList.add('visible');
            
            // Set up search box functionality
            const searchBox = document.getElementById('allMoviesSearch');
            searchBox.value = currentFilters.search;
            searchBox.oninput = () => {
                currentFilters.search = searchBox.value;
                applyFiltersAndUpdate();
            };
        }

        function closeAllMovies() {
            document.getElementById('allMoviesPage').classList.remove('visible');
            document.getElementById('mainPage').classList.add('visible');
            genresVisible = false;
        }

        // Actor details functionality
        function openActorDetails() {
            // Close sidebar and overlay
            document.getElementById('sidebar').classList.remove('open');
            document.getElementById('overlay').classList.remove('visible');
            
            // Hide genre circles if visible
            document.getElementById('genreCircles').classList.remove('visible');
            genresVisible = false;
            
            // Close any other open pages first
            document.getElementById('moviePage').classList.remove('visible');
            document.getElementById('allMoviesPage').classList.remove('visible');
            document.getElementById('movieDetailsPage').classList.remove('visible');
            document.getElementById('mainPage').classList.remove('visible');
            
            document.getElementById('actorDetailsPage').classList.add('visible');
        }

        function closeActorDetails() {
            document.getElementById('actorDetailsPage').classList.remove('visible');
            document.getElementById('mainPage').classList.add('visible');
            genresVisible = false;
        }

        // Home functionality
        function goHome() {
            // Close sidebar and overlay
            document.getElementById('sidebar').classList.remove('open');
            document.getElementById('overlay').classList.remove('visible');
            
            // Hide genre circles if visible
            document.getElementById('genreCircles').classList.remove('visible');
            genresVisible = false;
            
            // Close all other pages
            document.getElementById('moviePage').classList.remove('visible');
            document.getElementById('allMoviesPage').classList.remove('visible');
            document.getElementById('actorDetailsPage').classList.remove('visible');
            document.getElementById('movieDetailsPage').classList.remove('visible');
            
            // Show main page
            document.getElementById('mainPage').classList.add('visible');
        }
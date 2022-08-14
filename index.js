var questionsEl = document.getElementById('questions')
var answersEl = document.getElementById('answers')

var questions = ['1. What is the supreme law of the land? ',

    '2. What does the Constitution do? ',

    '3. The idea of self-government is in the first three words of the Constitution. What are these words?',

    '4. What is an amendment? ',

    '5. What do we call the first ten amendments to the Constitution? ',

    '6. What is one right or freedom from the First Amendment?',

    '7. How many amendments does the Constitution have? ',

    '8. What did the Declaration of Independence do? ',

    '9. What are two rights in the Declaration of Independence? ',

    '10. What is freedom of religion? ',

    '11. What is the economic system in the United States?',

    '12. What is the “rule of law”?',

    '13. Name one branch or part of the government.',

    '14. What stops one branch of government from becoming too powerful? ',

    '15. Who is in charge of the executive branch? ',

    '16. Who makes federal laws?',

    '17. What are the two parts of the U.S. Congress?',

    '18. How many U.S. Senators are there? ',

    '19. We elect a U.S. Senator for how many years? ',

    '20. Who is one of your state’s U.S. Senators now?',

    '21. The House of Representatives has how many voting members? ',

    '22. We elect a U.S. Representative for how many years? ',

    '23. Name your U.S. Representative. ',

    '24. Who does a U.S. Senator represent? ',

    '25. Why do some states have more Representatives than other states? ',

    '26. We elect a President for how many years? ',

    '27. In what month do we vote for President?',

    '28. What is the name of the President of the United States now?',

    '29. What is the name of the Vice President of the United States now? ',
    
    '30. If the President can no longer serve, who becomes President ? ',
    
    '31. If both the President and the Vice President can no longer serve, who becomes President? ',

    '32. Who is the Commander in Chief of the military?',

    '33. Who signs bills to become laws?',

    '34. Who vetoes bills? ',

    '35. What does the President’s Cabinet do? ',

    '36. What are two Cabinet-level positions? ',

    '37. What does the judicial branch do? ',

    '38. What is the highest court in the United States? ',

    '39. How many justices are on the Supreme Court? ',

    '40. Who is the Chief Justice of the United States now?',

    '41. Under our Constitution, some powers belong to the federal government. What is one power of the federal government? ',

    '42. Under our Constitution, some powers belong to the states. What is one power of the states? ',

    '43. Who is the Governor of your state now? ',

    '44. What is the capital of your state?',

    '45. What are the two major political parties in the United States?',

    '46. What is the political party of the President now? ',

    '47. What is the name of the Speaker of the House of Representatives now? ',

    '48. There are four amendments to the Constitution about who can vote. ',

    '49. What is one responsibility that is only for United States citizens?',

    '50. Name one right only for United States citizens.',

    '51. What are two rights of everyone living in the United States?',

    '52. What do we show loyalty to when we say the Pledge of Allegiance? ',

    '53. What is one promise you make when you become a United States citizen?',

    '54. How old do citizens have to be to vote for President?',

    '55. What are two ways that Americans can participate in their democracy?',

    '56. When is the last day you can send in federal income tax forms?',

    '57. When must all men register for the Selective Service? ',

    '58. What is one reason colonists came to America? ',

    '59. Who lived in America before the Europeans arrived? ',

    '60. What group of people was taken to America and sold as slaves? ',

    '61. Why did the colonists fight the British? ',

    '62. Who wrote the Declaration of Independence? ',

    '63. When was the Declaration of Independence adopted?',

    '64. There were 13 original states. Name three. ',

    '65. What happened at the Constitutional Convention?',

    '66. When was the Constitution written? ',

    '67. The Federalist Papers supported the passage of the U.S. Constitution. Name one of the writers. ',

    '68. What is one thing Benjamin Franklin is famous for?',

    '69. Who is the “Father of Our Country”?',

    '70. Who was the first President?',

    '71. What territory did the United States buy from France in 1803? ',

    '72. Name one war fought by the United States in the 1800s.',

    '73. Name the U.S. war between the North and the South. ',

    '74. Name one problem that led to the Civil War. ',

    '75. What was one important thing that Abraham Lincoln did?',

    '76. What did the Emancipation Proclamation do?',

    '77. What did Susan B. Anthony do?',

    '78. Name one war fought by the United States in the 1900s.',

    '79. Who was President during World War I? ',

    '80. Who was President during the Great Depression and World War II?',

    '81. Who did the United States fight in World War II? ',

    '82. Before he was President, Eisenhower was a general. What war was he in? ',

    '83. During the Cold War, what was the main concern of the United States? ',

    '84. What movement tried to end racial discrimination? ',

    '85. What did Martin Luther King, Jr. do?',

    '86. What major event happened on September 11, 2001, in the United States? ',

    '87. Name one American Indian tribe in the United States. ',

    '88. Name one of the two longest rivers in the United States. ',

    '89. What ocean is on the West Coast of the United States?',

    '90. What ocean is on the East Coast of the United States? ',

    '91. Name one U.S. territory. ',

    '92. Name one state that borders Canada. ',

    '93. Name one state that borders Mexico. ',

    '94. What is the capital of the United States?',

    '95. Where is the Statue of Liberty?',

    '96. Why does the flag have 13 stripes?',

    '97. Why does the flag have 50 stars?',

    '98. What is the name of the national anthem?',

    '99. When do we celebrate Independence Day?',

    '100. Name two national U.S. holidays.']

var answers = [
'1. the Constitution',

'2. sets up the government defines the government protects basic rights of Americans',

'3. We the People',

'4. a change (to the Constitution), an addition (to the Constitution)',

'5. the Bill of Rights',

'6. speech, religion, assembly, press, petition the government',

'7. twenty-seven (27)',

'8. announced our independence (from Great Britain), declared our independence (from Great Britain), said that the United States is free (from Great Britain)',

'9. life, liberty, pursuit of happiness',

'10. You can practice any religion, or not practice a religion.',

'11. capitalist economy, market economy',

'12. Everyone must follow the law. Leaders must obey the law. Government must obey the law. No one is above the law.',

'13. Congress, legislative, President, executive, the courts, judicial',

'14. checks and balances, separation of powers',

'15. the President',

'16. Congress, Senate and House (of Representatives), (U.S. or national) legislature',

'17. the Senate and House (of Representatives)',

'18. one hundred (100)',

'19. six (6)',

'20. Mike Lee, Mitt Romney ',

'21. four hundred thirty-five (435)',

'22. two (2)',

'23. Blake Moore, John Curtis, Burgess Owens, Chris Stewart',

'24. all people of the state',

'25. (because of) the state’s population, (because) they have more people, (because) some states have more people',

'26. four (4)',

'27. November',

'28. Joe Biden',

'29. Kamala Harris',

'30. the Vice President',

'31. the Speaker of the House',

'32. the President',

'33. the President',

'34. the President',

'35. advises the President',

'36. Secretary of Agriculture, Secretary of Commerce, Secretary of Defense, Secretary of Education, Secretary of Energy, Secretary of Health and Human Services Secretary of Homeland Security Secretary of Housing and Urban Development Secretary of the Interior Secretary of Labor Secretary of State Secretary of Transportation Secretary of the Treasury Secretary of Veterans Affairs Attorney General Vice President',

'37. reviews laws explains laws resolves disputes (disagreements) decides if a law goes against the Constitution',

'38. the Supreme Court',

'39. Nine Justices 9',

'40. John Roberts',

'41. to print money to declare war to create an army to make treaties',

'42. provide schooling and education, provide protection (police), provide safety (fire departments), give a driver’s license, approve zoning and land use',

'43. Spencer J. Cox',

'44. Salt Lake City',

'45. Democratic and Republican',

'46. Democratic party',

'47. Nancy Pelosi',

'48. Citizens eighteen (18) and older (can vote). You don’t have to pay (a poll tax) to vote. Any citizen can vote. (Women and men can vote.) A male citizen of any race (can vote).',

'49. serve on a jury vote in a federal election',

'50. vote in a federal election run for federal office',

'51. freedom of expression, freedom of speech, freedom of assembly, freedom to petition the government, freedom of religion the right to bear arms',

'52. the United States, the flag',

'53. give up loyalty to other countries, defend the Constitution and laws of the United States, obey the laws of the United States, serve in the U.S. military (if needed), serve (do important work for) the nation (if needed), be loyal to the United States',

'54. eighteen (18) and older',

'55. vote, join a political party, help with a campaign, join a civic group, join a community group, give an elected official your opinion on an issue, call Senators and Representatives, publicly support or oppose an issue or policy, run for office, write to a newspaper',

'56. April 15',

'57. at age eighteen (18), between eighteen (18) and twenty-six (26)',

'58. freedom, political liberty, religious freedom, economic opportunity, practice their religion, escape persecution',

'59. American Indians, Native Americans',

'60. Africans, people from Africa',

'61. because of high taxes (taxation without representation), because the British army stayed in their houses (boarding, quartering), because they didn’t have self-government',

'62. (Thomas) Jefferson',

'63. July 4, 1776',

'64. New Hampshire, Massachusetts, Rhode Island, Connecticut, New York, New Jersey, Pennsylvania, Delaware, Maryland, Virginia, North Carolina, South Carolina, Georgia',

'65. The Constitution was written. The Founding Fathers wrote the Constitution.',

'66. 1787',

'67. (James) Madison, (Alexander) Hamilton, (John) Jay Publius',

'68. U.S. diplomat, oldest member of the Constitutional Convention, first Postmaster General of the United States, writer of “Poor Richard’s Almanac”, started the first free libraries',

'69. (George) Washington',

'70. (George) Washington',

'71. the Louisiana Territory, Louisiana,',

'72. War of 1812, Mexican-American War, Civil War, Spanish-American War',

'73. the Civil War, the War between the States',

'74. slavery, economic reasons, states’ rights',

'75. freed the slaves (Emancipation Proclamation), saved (or preserved) the Union, led the United States during the Civil War',

'76. freed the slaves, freed slaves in the Confederacy, freed slaves in the Confederate states, freed slaves in most Southern states',

'77. fought for women’s rights, fought for civil rights',

'78. World War I, World War II, Korean War, Vietnam War, (Persian) Gulf War',

'79. (Woodrow) Wilson',

'80. (Franklin) Roosevelt',

'81. Japan, Germany, and Italy',

'82. World War II',

'83. Communism',

'84. civil rights (movement)',

'85. fought for civil rights, worked for equality for all Americans',

'86. Terrorists attacked the United States.',

'87.[USCIS Officers will be supplied with a list of federally recognized American Indian tribes.] Cherokee, Navajo, Sioux, Chippewa, Choctaw, Pueblo, Apache, Iroquois, Creek, Blackfeet, Seminole, Cheyenne, Arawak, Shawnee, Mohegan, Huron, Oneida, Lakota, Crow, Teton, Hopi, Inuit',

'88. Missouri (River), Mississippi (River)',

'89. Pacific (Ocean)',

'90. Atlantic (Ocean)',

'91. Puerto Rico, U.S. Virgin Islands, American Samoa, Northern Mariana Islands, Guam',

'92. Maine, New Hampshire, Vermont, New York, Pennsylvania, Ohio, Michigan, Minnesota, North Dakota, Montana, Idaho, Washington, Alaska',

'93. California, Arizona, New Mexico, Texas',

'94. Washington, D.C.',

'95. New York (Harbor), Liberty Island, [Also acceptable are New Jersey, near New York City, and on the Hudson (River).]',

'96. because there were 13 original colonies, because the stripes represent the original colonies',

'97. because there is one star for each state, because each star represents a state, because there are 50 states',

'98. The Star-Spangled Banner',

'99. July 4',

'100. New Year’s Day, Martin Luther King, Jr. Day, Presidents’ Day, Memorial Day, Independence Day, Labor Day, Columbus Day, Veterans Day, Thanksgiving, Christmas'
]

var getQuestion = 0



function displayQuestion() {
    questionsEl.textContent = questions[`${getQuestion}`]
    answersEl.textContent = answers[`${getQuestion}`]
}
displayQuestion()


function nextQuestion() {
    questionsEl.textContent = ''
    answersEl.textContent = ''
    getQuestion++
    console.log(getQuestion)
    revealAnswer()
    if (getQuestion >= questions.length) {
        alert("No More Questions Please Refresh to Start Again")
    }
    displayQuestion()
}

function previousQuestion() {
    questionsEl.textContent = ''
    answersEl.textContent = ''
    getQuestion--
    console.log(getQuestion)
    if (getQuestion >= questions.length) {
        alert("No More Questions Please Refresh to Start Again")
    }
    displayQuestion()
}

function revealAnswer() {
    var x = document.getElementById("answers");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}






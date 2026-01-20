import { useParams, Link } from 'react-router-dom'
import './Article.css'

// Article content - add your essays here
const articles = {
  'on-bertrand-russell': {
    title: 'On Bertrand Russell',
    date: 'June 2020',
    content: `
      <p>Back in 2020 I thought a lot about Bertrand Russell's philosophy, and its importance to the modern world. This piece was originally published for a student political commentary website. What follows is my original introduction:</p> 
      <p>I recently had the good fortune to pick up a copy of the Basic Works of Bertrand Russell by Routledge. My interest in Russell was sparked by his famous Problems of Philosophy, but the insights, breadth and depth on so many topics offered by this anthology of Russell’s impressive and lengthy career have taught me much about topics on which I used to know little. I have tried, where possible, to cite quotations from their original sources, but Russell’s works are so numerous it is often difficult to track down when he first wrote the quotes I have used. To those who are searching for philosophy, which is both relevant and analytically rigorous, look no further than the works of Bertrand Russell. They are as important today as they ever were. </p>
      <h1>Bertrand Russell in the 21st century</h1>
      <p>We live in turbulent times. The Western World is increasingly polarised between the Left and Right, COVID-19 threatens lives and economic recession, and climate change poses perhaps the greatest threat to the global poor that humanity has ever known. It is hard not to feel lost in the world of identity politics, pandemics, global power plays, mass media, and the rise of fake news which makes our traditional sources of information and comfort so difficult to trust. So, what could a man born in 1872 Victorian Britain at the height of British imperialism hope to tell us about our own 21st century problems? As it turns out, a great deal.</p>
      <p>Bertrand Russell was perhaps the greatest British philosopher of near modern times. He is widely credited as the champion, if not the founder, of analytic philosophy, a school which directed Anglophone academia for the better part of a century. His championing of a more scientific approach to philosophy appealed to many, and inspired the likes of Ludwig Wittgenstein, A. J. Ayer, and Karl Popper. However, Russell’s work was far from confined to academic philosophy. From religion to international affairs, Russell wrote and spoke on everything, and over the course of his long career lectured on four separate continents to adoring and deploring audiences alike. His pieces on the need for better sex education and access to contraception caused more than a stir in the United States between the wars, his views on Christianity and Marxism frustrated both revolutionaries and conservatives, and as a conscientious objector in 1914, he proved more than willing to dissent against the mood of the time. For a man born while Queen Victoria held the throne, his views were decidedly un-Victorian. </p>
      <p>Although not immediately obvious, the connections between our own time and Russell’s are numerous. The Suffragette movement and demands for the enfranchisement of women and working-class men regularly made headlines in his youth. Growing tensions between nations before the First World War, the rise of populism across Europe in the build-up to the Second World War, and the ideological fervour of the Cold War characterise the type of world in which Russell lived as he wrote the majority of his work. Whilst our world is very different, it is not hard to see the parallels. In place of the Suffragettes, we have the Black Lives Matter and LGBTQ+ movements. In place of the Cold War we have rising tensions between the United States and China as Trump and Xi Jinping seek to prove themselves on the world stage. In place of interwar populism, we have parties like UKIP in the United Kingdom, AFD in Germany, and the National Front in France. Our world is not so very different from Russell’s. So, what lessons can we learn from his philosophy and writings that might grant us insight into the turmoil of modern society?</p>
      <p>The first thing we would do well to learn from Russell, is a healthy scepticism in our own beliefs and a willingness to respect the rational arguments of others. No matter how true or certain we take our beliefs to be, there is always the distinct possibility that they may be wrong. Over the course of his life, Russell’s mind changed often, and he once said that ‘I am not myself in any degree ashamed of having changed my opinions. What physicist who was active in 1900 would dream of boasting that his opinions had not changed?’ . However, Russell by no means advocated blind submission to contrary views. Instead, he held rationality to be of the utmost importance, and was willing to concede his own opinions only when confronted with logical arguments that he could not refute. His pieces on Marxism, some of the earliest serious criticisms of the doctrine, did not resort to anger or denounce the ideology as world ending. Instead, Russell gave credit where credit was due. He praised Marx’s undoubtedly important contributions to economic and sociological analysis whilst also refuting the parts of Marxian materialism which he deemed contradictory. As a member of the English aristocracy, Russell showed respect even for the doctrine which labelled him ‘monster’. In our modern world, we are confronted every day with words which accuse us, are designed to enrage us, which denounce our beliefs, and label us as snowflake, or bigoted. It is no wonder that we do not want to listen to our opponents. However, non-platforming controversial academics, labelling views with which we disagree as disgusting, and hurling abuse at our opponents online will do little to lessen our woes. Instead, like Russell, we ought to properly consider the arguments contrary to our own beliefs, engage meaningfully with our opponents, and give credit where credit is due. It is unlikely that anyone is either completely right or completely wrong concerning the seemingly interminable social questions of today. There is no shame in admitting that. Only when we trust our dogmatic beliefs less, and the power of rationality more, will we be able to constructively engage with each other and work towards meaningful solutions.</p>
      <p>The second doctrine which we can learn from Russell is the importance of history and science in the everyday. If we recognise the fallibility of past eras, and the smallness of humanity when compared to the universe, we are far more able to consider rationally and compassionately the problems of our own age. Indeed, in times of rising nationalism we would do well to remember that ‘no nation was ever so virtuous as each believes itself, and none was ever so wicked as each believes the other’ . Throughout his works, it is obvious Russell is acutely aware of the fact that he is but one small part of one small country on a planet which floats through an ancient and uncaring universe. Yet his conclusions are not so cold as could be expected. Rather than preaching meaninglessness and unimportance, Russell simply invites us to consider that ‘no portion of mankind in the past was as good as it thought itself, or as bad as it was thought by its enemies’ , and that we as moral agents are far from infallible. For Russell, the value of humanity comes not from great posturing, the superiority of one age or country, or the moral condemnation of one group by another, but from our collective efforts to better the lot of humankind in an uncaring and immense universe. Indeed, for him we should take solace in the fact that ‘we know very little, and yet it is astonishing that we know so much, and still more astonishing that so little knowledge can give us so much power’ . For Russell, it is our knowledge of the world, and our ability to change it for the better which gives such importance and value to each individual person’s existence. As individuals, we can still contribute to the vastness of humankind, and still find meaning for ourselves even in a world as confusing as our own.</p>
      <p>Finally, Russell conducts his work at all times with compassion and respect for humanity. His beliefs and conclusions are motivated by a desire to improve the lot of the least fortunate, and to decrease human misery. For Russell, it is obvious that contraception should be widely available because it is likely to lead to more human happiness. Furthermore, concerning sex education, and education generally, it is obvious to him that teachers ought to treat children with respect, and as ends in themselves rather than as means to furthering the goals of the teacher, the school, or the state that sponsors it. Indeed, for Russell ‘the good life is one inspired by love and guided by knowledge’ , and it is with this in mind that he conducts his research. These conclusions may seem a given in the 21st century, but they were more than controversial to many at the time, and indeed still are today. As a society, we are far from respectful. People shout their opponents down as unimportant and unworthy, on social media we base each other’s worth on looks only possible with the aid of digital editing, and at political rallies we chant against the opponents we so love to hate. In the words of Russell, ‘there are things that our age needs… It needs compassion and a wish that mankind should be happy’ . Those with whom we disagree are not our enemies, they are human beings with a differing opinion. The onus is on us to treat them with respect, with an open mind, and with an awareness of our own imperfection, regardless of whether they do the same.</p>
      <p>Healthy scepticism in our own beliefs, an awareness of our fallible nature, and the treatment of humanity with respect would go a long way to solving the issues of our own time. The solutions of a Victorian born philosopher are not so very far removed from 21st problems as perhaps we would like to believe.<p>
      <h2>References</h2>
      <p>Russell, Bertrand. The Basic Writings of Bertrand Russell, Routledge 2009.</p>
      `
    }
}

function Article() {
  const { slug } = useParams()
  const article = articles[slug]

  if (!article) {
    return (
      <main className="article">
        <div className="article-container">
          <p>Article not found.</p>
          <Link to="/" className="back-link">← Back home</Link>
        </div>
      </main>
    )
  }

  return (
    <main className="article">
      <div className="article-container">
        <Link to="/" className="back-link">← Back home</Link>
        
        <header className="article-header">
          <h1>{article.title}</h1>
          <time>{article.date}</time>
        </header>

        <article 
          className="article-content"
          dangerouslySetInnerHTML={{ __html: article.content }}
        />

        <footer className="article-footer">
          <Link to="/" className="back-link">← Back home</Link>
        </footer>
      </div>
    </main>
  )
}

export default Article

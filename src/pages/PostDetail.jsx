import React from 'react'
import PostAuthor from '../components/PostAuthor'
import { Link } from 'react-router-dom'
import Thumbnail from '../images/blog22.jpg'


const PostDetail = () => {
  return (
    <section className="post-detail">
      <div className="container post-detail__container">
         <div className="post-detail__header">
          <PostAuthor />
          <div className="post-detail__buttons">
            <Link to={`/posts/werewe/edit`} className="btn sm primary">Edit</Link>
            <Link to={`/posts/werewe/delete`} className="btn sm danger">Delete</Link>
          </div>
         </div>
         <h1>This is the post title!</h1>
         <div className="post-detail__thumbnail">
            <img src={Thumbnail} alt="" />
         </div>
         <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio dol
          orem consequatur dolorum officia. Est mollitia porro reprehenderit d
          olor veritatis nemo assumenda error facilis doloremque at numquam ape
          riam suscipit laborum, nisi volu
          ptas corrupti, nulla vel, rem voluptate quo. Porro, error aspernatur?
         </p>
         <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio dol
          orem consequatur dolorum officia. Est mollitia porro reprehenderit d
          olor veritatis nemo assumenda error facilis doloremque at numquam ape
          riam suscipit laborum, nisi volu
          ptas corrupti, nulla vel, rem voluptate quo. Porro, error aspernatur?
         </p>
         <p>
         Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Fuga quam tenetur explicabo ipsam quis sunt quaerat corrupti n
          obis repellendus quae error dignissimos magnam saepe sed, magni accusantium 
          laboriosam ullam sit culpa voluptatibus? Animi eveniet velit, quaerat debitis
           perspiciatis cupiditate aperiam nemo? Sunt expedita voluptates aliquid accusa
           mus temporibus aut, perferendis nihil corrupti facere libero animi, explicabo, c
           upiditate dolore quis omnis quasi aspernatur odit quibusdam? Quisquam a atque, 
           fugit mollitia nobis laboriosam, minima reprehenderit maiores alias, saepe nam 
           itaque illo pariatur sit eum quibusdam necessitatibus natus iusto. Sit odit 
           sapiente molestiae autem nam nostrum debitis, placeat, vero repudiandae per
           ferendis explicabo voluptatibus ducimus. Illo dolorem incidunt eveniet de
         bitis? Eius rem consectetur quibusdam reprehenderit omnis?
         </p>
         <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Veniam non soluta architecto sit id ul
        lam voluptatibus dignissimos eius deserunt libero.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Blanditiis natus a maxime assumenda amet ducimus quam commodi 
        cum corporis sit aliquid ut minus, quo fugit nobis, deleniti nam 
        laboriosam adipisci facilis quasi! Ipsum sequi minus amet ab eos 
        inventore ratione fugiat optio impedit, iste ex commodi quas hic 
        corrupti atque architecto nulla totam accusantium numquam nostrum? 
        Neque necessitatibus, eum fugit perspiciatis, optio temporibus, 
        explicabo beatae animi eius fugiat repudiandae minima quo fuga 
        eveniet similique incidunt blanditiis deserunt consectetur. Ex 
        dignissimos sunt molestiae similique sit doloremque, ipsum vel 
        voluptatibus praesentium doloribus, libero quis! Exercitationem 
        eos incidunt, sint quis adipisci voluptatibus facere quidem 
        cupiditate aspernatur architecto facilis odit doloremque esse 
        iusto tempore aut voluptatem vel quibusdam et sequi dolores 
        molestiae minima? Nulla numquam iste voluptates! Aut, perspiciatis 
        pariatur reprehenderit tempore, nulla fugiat ducimus illo aliquam quas 
        recusandae numquam. Quisquam exercitationem id velit voluptatem officiis 
        assumenda dolore esse, totam dolorum natus corporis obcaecati, culpa omnis 
        officia nam veritatis minima sequi commodi, mollitia deserunt aspernatur 
        laboriosam nesciunt iste voluptate! Veniam ducimus id totam perspiciatis 
        veritatis, quasi distinctio ipsum dolorum aut hic. Quas eveniet, facere 
        doloribus assumenda voluptas eligendi accusamus ipsam excepturi amet aperiam
         dolorum eius sit modi repel
        lendus nostrum eaque repudiandae vitae quam consequatur.
      </p>
      </div>
      
    </section>
  )
}

export default PostDetail

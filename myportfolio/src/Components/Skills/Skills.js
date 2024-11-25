import React from 'react'
import '../Skills/Skills.css'
import java1 from '../../Images/assets/java.png'
import webtech from '../../Images/assets/code.png'
import sql1 from '../../Images/assets/sql.png'

const Skills = () => {
  return (
    <section id='skills'>
        <span className='skillTitle'>What I Do</span>
        <span className='skillDesc'>
            With a strong foundation in Web Technologies, Java and SQL I possess versatile skills in HTML, CSS, JavaScript, ReactJS, SQL and Core Java. Proficient in HTML, I create visually appealing web pages for seamless user experiences. In CSS, I design responsive interfaces that enhance functionality. With JavaScript and ReactJS, I develop interactive functionalities to drive user engagement. Additionally, my expertise in Core Java enables me to build robust and scalable applications. And SQL to store the data.
            I am committed to delivering exceptional results and contributing to the success of innovative organizations.
        </span>
        <div className='skillBars'>
            <div className='skillBar'>
                <img src={java1} className='skillBarImg' alt='Javaimg'/>
                <div className='skillBarText'>
                    <h2>Java Coder</h2>
                    <p>I'm a core Java programmer with expertise in object-oriented programming and Java's core libraries. I build efficient and scalable applications, using various data structures like arrays, lists, and maps. I implement common algorithms and manage multithreading for high performance. 
                        My skills include debugging, code optimization, and teamwork. I focus on creating reliable and maintainable software solutions.
                    </p>
                </div>
            </div>
            <div className='skillBar'>
                <img src={webtech} className='skillBarImg' alt='webtechImg'/>
                <div className='skillBarText'>
                    <h2>Web Developer & Designer</h2>
                    <p>
                        I'm a web developer and designer with skills in building interactive and visually appealing websites. I specialize in front-end technologies like HTML, CSS, and JavaScript, and work with frameworks such as ReactJS. I design user-friendly interfaces, focusing on both aesthetics and usability. My expertise includes creating responsive designs for various devices and ensuring websites are optimized for performance. Additionally,
                        I collaborate with back-end developers and stakeholders to deliver high-quality web experiences.
                    </p>
                </div>
            </div>
            <div className='skillBar'>
                <img src={sql1} className='skillBarImg' alt='SqlImg'/>
                <div className='skillBarText'>
                    <h2>SQL Coder</h2>
                    <p>
                    I'm an SQL coder with a focus on database design and query optimization. I specialize in writing efficient SQL queries to manage, manipulate, and retrieve data from relational databases. I create and maintain database schemas, tables, indexes, and relationships to ensure data integrity. My skills include joining tables, writing complex queries, and optimizing database performance. Additionally,
                     I collaborate with developers and business analysts to provide accurate and meaningful data insights for business applications.
                    </p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Skills
<template>
  <main id="content-wrapper" class="container">
    <div>
      <figure>
        <img
          src="../../assets/images/my_family.jpg"
          class="img-rounded"
          alt="My Family"
        />
        <figcaption>My Family</figcaption>
      </figure>
    </div>
    <div>
      <p>
        My name is Rachid Rafia. I currently work as a full-stack developer for
        Bullard, an international company that specializes in safety equipment.
        I am responsible for building and managing all of the company's web
        applications. I have developed many enterprise websites and applications
        for the company. I have also helped outside companies with programming
        and security projects.
      </p>
      <p>
        I'm originally from Morocco. I moved into the states in 2008, after I
        met my beautiful wife. We have three kids, ages 10, 7, and 4. Outside of
        work, I enjoy playing and watching sports. Especially football; I mean
        soccer :-). I also enjoy playing video games with my wife and kids (we
        can't wait for the PS5 to be released), listening to Science and Tech
        Podcasts (big fan of StarTalk and TechStuff), working out, and
        traveling.
      </p>
    </div>
  </main>
</template>
<script>
export default {
  name: "mainContent"
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#content-wrapper .about div p:first-child {
  margin-top: 50px;
}

#content-wrapper .about figure {
  margin-top: 20px;
}
</style>

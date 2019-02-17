<template>
  <section class="section">
    <div class="container">
      <form action="http://localhost:5000/post" method="POST">
        <div class="field">
          <label class="label">Name</label>
          <div class="control">
            <input class="input" type="text" placeholder="Character Name" name="name">
          </div>
        </div>
        <div class="field">
          <label class="label">Class</label>
          <div class="control">
            <input class="input" type="text" placeholder="Character Class" name="class">
          </div>
        </div>
        <div class="field">
          <label class="label">Weapons</label>
          <div class="control">
            <input class="input" type="text" placeholder="Character Weapons" name="weapon">
          </div>
        </div>
        <div class="field">
          <label class="label">Ultimate</label>
          <div class="control">
            <input class="input" type="text" placeholder="Character Ultimate" name="ultimate">
          </div>
        </div>
        <div class="field">
          <label class="label">Image URL</label>
          <div class="control">
            <input class="input" type="text" placeholder="Image URL" name="imageUrl">
          </div>
        </div>
        <div class="field">
          <div class="control">
            <button class="button is-link" type="submit">Submit</button>
          </div>
        </div>
      </form>
    </div>
  </section>
</template>

<script>
    import SubjectBox from './SubjectBox.svelte';
  
    //dummy subjects for 
    let subjects = [ 
      {
        id: 'us-history',
        title: 'History of the United States',
        icon: 'https://www.excelsior.edu/wp-content/uploads/2018/08/United-States-History_blog.png', 
      },
      {
        id: 'meditation',
        title: 'Meditation technique',
        icon:'https://img.freepik.com/free-photo/full-shot-adult-meditating_23-2149711525.jpg'}
    ];
  </script>
  
  <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
    {#each subjects as subject (subject.id)}
      <SubjectBox {subject} />
    {/each}
  </div>
  
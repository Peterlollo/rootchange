<template>
  <div class='container'>
    <h4 class='small-title'>Org</h4>
    <a target='_blank' class='big-text' href='http://xinampa.io/'>Xinampa</a>
    <h4 class='small-title'>Links</h4>
		<ul>
			<li><a class='big-text' target='_blank' href='http://mikrocosmos-user.threestone.io'>User-facing frontend</a></li>
			<li><a class='big-text' target='_blank' href='http://mikrocosmos-provider.threestone.io'>Enterprise-facing frontend</a></li>
			<li><a class='big-text' target='_blank' href='http://cosmosdev.xinampa.io/premium'>Premium Page and Payment</a></li>
		</ul>
		<div>More images here</div>
	</div>
</template>

<script>
export default {

  name: 'ProjectSidebar',

  data() {
    return {

    };
  },
};
</script>

<style lang="css" scoped>
.container {
	margin-left: 25px;
	margin-right: 25px;
}
.big-text {
  font-size: 1.7rem;
  color: #fff;
  font-weight: 500;
  text-decoration: none;
  text-align: left;
  display: flex;
  justify-content: flex-start;
  flex-direction: row;
}
.small-title {
  font-size: 1.2rem;
  font-weight: 600;
  color: #0098FF;
  text-align: left;
  margin-bottom: .3rem;
}
ul {
  padding-left: 0;
}
li {
  list-style-type: none;
}
</style>

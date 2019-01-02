<template>
  <div>
    <div>
      <h1>Select An Organization</h1>
      <select v-model="selected">
        <option disabled value="">Please select one</option>
        <option v-for='(org, i) in orgNames' :key='i'>{{org}}</option>
      </select>
      <h1 class='subtitle'>Connections</h1>
      <ul>
        <li v-for='(match, i) in connections' :key='i' v-on:click='changeCountry(match)'>{{match}}</li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'Home',
  data: () => {
    return {
      selected: ''
    }
  },
  methods: {
    changeCountry(match) {
      this.selected = match
    },
  },
  computed: {
    connections () {
      if (!this.selected) {
        return []
      } else {
        let selected = this.orgData[this.selected] 
        let country = selected['Country']
        let sector = selected['Sector']
        return this.orgNames.filter((org) => {
          if (org === this.selected) {
            return false
          } else {
            let orgCountry = this.orgData[org]['Country']
            let orgSector = this.orgData[org]['Sector']
            return  orgCountry === country || orgSector === sector
          }
        })  
      }
    },
    ...mapGetters(['orgNames', 'orgData'])
  }
}
</script>

<style scoped>
h1 {
  font-weight: 900;
}
.subtitle {
  color: #ff5851;
}
select {
  font-size: 24px;
}
ul {
  list-style-type: none;
  padding-left: 0;
}
li {
  font-weight: 700;
  font-size: 14px;
  margin-bottom: 10px;
  border-bottom: solid 2px #eee;
}
li:hover {
  background-color: #3498db;
  cursor: pointer;
}
</style>

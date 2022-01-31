<template>
  <v-container fluid>
    <v-row class="text-center red">
        <!-- user can click location icon get current location 
        then match with dropdown and aoutomatic select nearest location -->
     <h1>hello finaLocationtask</h1>
     <v-icon
      @click="location"
      v-if="$store.getters.locations.length > 2"
      class="map-marker mb-2 ml-1">{{ mdiMapMarkerRadius }}
      </v-icon>
    </v-row>
    <v-row>
        <v-col cols="12" sm="12" class="pl-5 pr-7">
            <div class="center-input">
            <label
             v-if="$store.getters.locations.length > 1"
            class="lbl body-1 black--text"
            >
            Location
            <span class="ml-1">*</span>
            </label>
        <div class="d-flex">
<!--    item-text value is necessary while returning the object and customising template-->
             <v-select
                 v-if="$store.getters.locations.length > 1"
                 v-model="selectedLocationObject"
                :items="$store.getters.locations"
                return-object
                 item-text="target_locations[0]"
                 label="Select a Location"
                 solo
                 flat
                 outlined
                 class="form-control pa-0 ma-0 select-program"
                 height="20"
                 max-height="20"
                 min-height="20"
                 @change="locationChanged"
                 :menu-props="{ contentClass: 'location-select-dropdown' }"
                name="Location"
             v-validate="'required'"
            :error-messages="errors.collect('Location')"
            >
                                                          <template slot="selection" slot-scope="data">
                                                            {{(data.item.target_locations && data.item.target_locations.length > 0) ? data.item.target_locations[0] : data.item.city}}
                                                          </template>
                                                          <template slot="item" slot-scope="data">
                                                            {{(data.item.target_locations && data.item.target_locations.length > 0) ? data.item.target_locations[0] : data.item.city}}
                                                          </template>
                                                        </v-select>
                                                        <v-icon
                                                        @click="location"

                                                        v-if="$store.getters.locations.length > 2"
                                                        class="map-marker mb-2 ml-1">{{ mdiMapMarkerRadius }}</v-icon>
                                                        </div>
                                                    </div>
                                                </v-col>
    </v-row>
  </v-container>
</template>

<script>
import axios from 'axios'
  export default {
    name: 'finaLocationtask',

    data () {

      return {
        
      }
      
    },
    
    methods:{
      async sendLocation(position) {
      try {
        const res = await this.$axios({
          method: 'POST',
          url: 'http://127.0.0.1:8000/location/find/',
          params: { organization_id: 12 },
          config: {
            headers: {
              'Content-Type': 'application/json'
            },
          },
          data: {
            coordinates: {
              latitude: position.coords.latitude,
              longitude: position.coords.longitude
            }
          }
        })
        this.selectedLocationObject = this.$store.getters.locations.find(l=>l.id===res.data.location_id)
        console.log(res.data)
        return res.data
      } catch (err) {
        console.log(err.response)
      }
    },

    location() {
      navigator.geolocation.getCurrentPosition(
        this.sendLocation,
      error => {
         console.log(error.message);
      },
   )
    }
    },
    mounted(){
      
    }
    
  }
</script>

<style lang="scss" scoped>

</style>
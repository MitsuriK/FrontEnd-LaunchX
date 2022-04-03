<template>
  <AdminHeader/>
  <h1>Panel de administración</h1>
  <FlavorsAdmin/>
  <OurnmentsAdmin/>
  <TableAdmin/>
  <FooterGeneral/>
</template>

<script>
import AdminHeader from '@/components/AdminHeader.vue'
import FlavorsAdmin from '@/components/FlavorsAdmin.vue'
import TableAdmin from '@/components/TableAdmin.vue'
import FooterGeneral from '@/components/FooterGeneral.vue'

export default {
  name: 'AdminView',
  components: {
    AdminHeader,
    FlavorsAdmin,
    TableAdmin,
    FooterGeneral,
  }
}
</script>

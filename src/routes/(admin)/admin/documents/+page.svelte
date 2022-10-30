
<script lang="ts">

</script>

<div class="z-0  mt-10">
  <h3 class="mb-4 text-lg font-bold">Search Document</h3>
  <div class="search_tab cardWrapper py-5">
    <div class="flex-col flex gap-4">
      <input type="search" name="search" class="w-[300px]" placeholder="BOL number">
      <button type="submit" class="btn btn-primary h-[70px] w-[300px] my-3 text-white">Search <i class="fas fa-search ml-4"></i></button>
    </div>
  </div>
  <h3 class="text-lg my-4 font-bold">Upload document</h3>
  <div class="search_tab cardWrapper py-5 gap-4">
    <div class="flex flex-col gap-3">
      <label class="label font-bold" for="document_type_select">Document type</label>
      <select id="document_type_select" class="flex-row items-center w-[300px] font-normal">
        <option value="bol">BOL</option>
        <option value="quote">Quote</option>
        <option value="booking confirmation">Booking Confirmation</option>
      </select>
    </div>
    <button type="submit" class="btn btn-accent h-[70px] w-[300px] my-3 text-white">Attach  <i class="fas fa-paperclip ml-4"></i></button>
    <button type="submit" class="btn btn-primary h-[70px] w-[300px] my-3 text-white">upload  <i class="fas fa-upload ml-4"></i></button>
  </div>
</div>

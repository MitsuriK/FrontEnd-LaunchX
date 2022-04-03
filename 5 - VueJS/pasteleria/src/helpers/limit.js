export const limit = () => {
    $(document).ready(function () {
        $("input[class='single-checkbox']").change(function () {
            var maxAllowed = 2;
            var cnt = $("input[class='single-checkbox']:checked").length;
            if (cnt > maxAllowed) 
            {
                $(this).prop("checked", "");
                alert('Select maximum ' + maxAllowed + ' flavors!');
            }
        });
    });
}
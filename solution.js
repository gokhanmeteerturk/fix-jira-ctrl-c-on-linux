document.addEventListener("DOMContentLoaded", function (event)
{
    const setCopy = setTimeout(() =>
    {
        document.oncopy = function ()
        {
            const copyString = window.getSelection()
                .toString();
            const copyScript =
                "<!DOCTYPE html><html><head><meta charset='utf-8'></meta><script>async function copy(){ await navigator.clipboard.writeText(`" +
                copyString.replace(/`/g, "\\`") +
                "`);window.close();}copy();</script>";
            let new_window = window.open(URL
                .createObjectURL(new Blob([copyScript],
                {
                    type: "text/html"
                })));
        }
    }, 1500);
});
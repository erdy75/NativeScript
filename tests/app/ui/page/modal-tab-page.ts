import { NavigatedData } from "tns-core-modules/ui/page";
import { View } from "tns-core-modules/ui/core/view";
import * as TKUnit from "../../TKUnit";
import { stack } from "tns-core-modules/ui/frame";

export function onNavigatedTo(args: NavigatedData) {
    TKUnit.assertEqual(stack().length, 2, "Host and tab modal frame should be instantiated at this point!");
    (args.object as View).closeModal();
}

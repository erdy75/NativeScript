import { ShownModallyData } from "tns-core-modules/ui/core/view";
import { TabView } from "tns-core-modules/ui/tab-view/tab-view";
import * as TKUnit from "../../TKUnit";
import { stack } from "tns-core-modules/ui/frame";

export var modalTabView: TabView;
export function onShowingModally(args) {
    modalTabView = <TabView>args.object;
    args.object.showingModally = true;
}

export function onShownModally(args: ShownModallyData) {
    const tabView = <TabView>args.object;
    TKUnit.assertNotNull(tabView);
    if (args.context) {
        args.context.shownModally = true;
    }

    const hostFrame = stack()[0];
    TKUnit.assertNotNull(hostFrame, "Host frame should not be null");
    TKUnit.assertEqual(hostFrame.currentPage.modal, tabView, "hostFrame.currentPage.modal should be equal to the tabView instance on tabView.shownModally event handler.");
}
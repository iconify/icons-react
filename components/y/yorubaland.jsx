import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bc1fd0lxe.css';
import '../../css/r/rn10pccup.css';
import '../../css/t/ti6ugvdlu.css';
import '../../css/x/xfsagwjni.css';
import '../../css/z/zbpt045kk.css';
import '../../css/d/dbs0fvbvt.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<mask id="SVGqdEcMdXs"><circle class="bc1fd0lxe"/></mask><g mask="url(#SVGqdEcMdXs)"><path class="rn10pccup"/><path class="ti6ugvdlu"/><path class="xfsagwjni"/><path class="zbpt045kk"/><path class="dbs0fvbvt"/></g>`,
		"fallback": "circle-flags:yorubaland",
	});
}

export default Component;

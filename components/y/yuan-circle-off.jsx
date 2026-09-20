import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/d/dytyt2ibl.css';
import '../../css/t/tuthbmb5a.css';
import '../../css/c/chnk-g9lg.css';
import '../../css/y/youv8-beu.css';
import '../../css/z/zsuclwbnx.css';
import '../../css/k/kspoj7vnd.css';

const viewBox = {"width":26,"height":26};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="dytyt2ibl"/><path clip-rule="evenodd" class="tuthbmb5a"/><path clip-rule="evenodd" class="chnk-g9lg"/><path clip-rule="evenodd" class="youv8-beu"/><path class="zsuclwbnx"/><path clip-rule="evenodd" class="kspoj7vnd"/></g>`,
		"fallback": "pepicons-pencil:yuan-circle-off",
	});
}

export default Component;

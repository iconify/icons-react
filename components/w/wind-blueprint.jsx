import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/w/wj-10gb_s.css';
import '../../css/c/cf3uzcrzx.css';
import '../../css/k/ki54zjb3l.css';
import '../../css/g/gfx3gz9qm.css';
import '../../css/g/gyly-wb9r.css';
import '../../css/z/z_f4_w-5m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="wj-10gb_s wm-deco"/><path class="cf3uzcrzx wm-deco"/><path class="ki54zjb3l wm-k"/><path class="gfx3gz9qm wm-a"/><path class="gyly-wb9r wm-k"/><path class="wm-a z_f4_w-5m"/></g>`,
		"fallback": "withicons:wind-blueprint",
	});
}

export default Component;

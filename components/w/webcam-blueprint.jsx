import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/b/b0fy0_l-a.css';
import '../../css/j/jwedoejag.css';
import '../../css/s/sdaucgb_l.css';
import '../../css/p/prgm-db-t.css';
import '../../css/m/mkl82bcfi.css';
import '../../css/d/da8zwfb5x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="b0fy0_l-a wm-deco"/><path class="jwedoejag wm-deco"/><path class="sdaucgb_l wm-deco"/><path class="prgm-db-t wm-k"/><path class="mkl82bcfi wm-a"/><path class="da8zwfb5x wm-a"/></g>`,
		"fallback": "withicons:webcam-blueprint",
	});
}

export default Component;

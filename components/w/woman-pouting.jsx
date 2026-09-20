import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yj-n85ffv.css';
import '../../css/w/w6uu4cclw.css';
import '../../css/e/e6zqr8bbr.css';
import '../../css/i/iyfihfbby.css';
import '../../css/m/mdbjzbadi.css';
import '../../css/g/gxsdwnt3y.css';
import '../../css/p/pgsqsjudc.css';
import '../../css/l/l117oj6ad.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yj-n85ffv"/><path class="w6uu4cclw"/><path class="e6zqr8bbr"/><path class="iyfihfbby"/><path class="mdbjzbadi"/><path class="gxsdwnt3y"/><path class="pgsqsjudc"/><path class="l117oj6ad"/>`,
		"fallback": "openmoji:woman-pouting",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/br-__gb2m.css';
import '../../css/a/a_399pbtf.css';
import '../../css/s/scjdmkghe.css';
import '../../css/h/h73mrwbie.css';
import '../../css/p/pgzmr_bif.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="br-__gb2m"/><path class="a_399pbtf"/><path class="scjdmkghe"/><path class="h73mrwbie"/><path class="pgzmr_bif"/>`,
		"fallback": "selfhst:whodb",
	});
}

export default Component;

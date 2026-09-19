import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aql7dnt-u.css';
import '../../css/u/ug-3ocbdk.css';
import '../../css/o/os5ebxzkm.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGCQ0IKcil"><g class="aql7dnt-u"><path class="ug-3ocbdk"/><path class="os5ebxzkm"/></g></mask></defs><path mask="url(#SVGCQ0IKcil)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:weixin-mini-app",
	});
}

export default Component;

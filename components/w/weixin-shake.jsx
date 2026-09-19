import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aql7dnt-u.css';
import '../../css/h/hnkmrzboi.css';
import '../../css/t/t53-tru5y.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGr9eI3clC"><g class="aql7dnt-u"><path class="hnkmrzboi"/><path class="t53-tru5y"/></g></mask></defs><path mask="url(#SVGr9eI3clC)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:weixin-shake",
	});
}

export default Component;

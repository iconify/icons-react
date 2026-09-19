import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aql7dnt-u.css';
import '../../css/v/vknzh77mq.css';
import '../../css/v/v8lrvwzjl.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGh0AjCdDV"><g class="aql7dnt-u"><path class="vknzh77mq"/><path class="v8lrvwzjl"/></g></mask></defs><path mask="url(#SVGh0AjCdDV)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:weixin-market",
	});
}

export default Component;

'use client'

import React from 'react';
import { cn } from '@/lib/utils';
import {
	Check,
	Copy,
	LucideIcon,
	Mail,
	MapPin,
	Phone,
	GithubIcon,
	TwitterIcon,
	LinkedinIcon,
	InstagramIcon,
	FacebookIcon,
	YoutubeIcon,
	icons,
} from 'lucide-react';
import { Button } from '@/components/ui/button';

interface ContactPageProps {
	heading: string;
	subheading: string;
	email: string;
	emailDescription: string;
	officeAddress: string;
	officeDescription: string;
	phoneNumbers: Array<{ number: string }>;
	phoneDescription: string;
	socialHeading: string;
	socialLinks: Array<{
		platform: string;
		url: string;
		icon: string;
	}>;
}

const iconMap: Record<string, LucideIcon> = {
	github: GithubIcon,
	twitter: TwitterIcon,
	linkedin: LinkedinIcon,
	instagram: InstagramIcon,
	facebook: FacebookIcon,
	youtube: YoutubeIcon,
};

export function ContactPage({
	heading,
	subheading,
	email,
	emailDescription,
	officeAddress,
	officeDescription,
	phoneNumbers,
	phoneDescription,
	socialHeading,
	socialLinks,
}: ContactPageProps) {
	return (
		<div className="min-h-screen w-full">
			<div className="mx-auto h-full max-w-6xl lg:border-x border-border">
				{/* Header Section */}
				<div className="flex grow flex-col justify-center px-4 md:px-6 pt-32 pb-16">
					<h1 className="text-4xl font-bold md:text-5xl text-foreground">
						{heading}
					</h1>
					<p className="text-muted-foreground mt-4 text-base md:text-lg">
						{subheading}
					</p>
				</div>

				<BorderSeparator />

				{/* Contact Information Grid */}
				<div className="grid md:grid-cols-3">
					{/* Email Box */}
					<Box
						icon={Mail}
						title="Email"
						description={emailDescription}
					>
						<a
							href={`mailto:${email}`}
							className="font-mono text-base font-medium tracking-wide hover:text-primary transition-colors"
						>
							{email}
						</a>
						<CopyButton className="size-6" text={email} />
					</Box>

					{/* Office Box */}
					<Box
						icon={MapPin}
						title="Office"
						description={officeDescription}
					>
						<span className="text-base font-medium whitespace-pre-line">
							{officeAddress}
						</span>
					</Box>

					{/* Phone Box */}
					<Box
						icon={Phone}
						title="Phone"
						description={phoneDescription}
						className="border-b-0 md:border-r-0"
					>
						<div className="space-y-2">
							{phoneNumbers.map((phone, index) => (
								<div key={index} className="flex items-center gap-x-2">
									<a
										href={`tel:${phone.number.replace(/\s/g, '')}`}
										className="block font-mono text-base font-medium tracking-wide hover:text-primary transition-colors"
									>
										{phone.number}
									</a>
									<CopyButton className="size-6" text={phone.number} />
								</div>
							))}
						</div>
					</Box>
				</div>

				<BorderSeparator />

				{/* Social Media Section */}
				<div className="relative flex h-full min-h-[400px] items-center justify-center py-16 px-6">
					{/* Grid Background Effect */}
					<div className="absolute inset-0 size-full -z-10 dot-grid-fade-center" />

					<div className="relative z-10 space-y-8 text-center">
						<h2 className="text-3xl font-bold md:text-4xl text-foreground">
							{socialHeading}
						</h2>
						<div className="flex flex-wrap items-center justify-center gap-4">
							{socialLinks.map((link) => {
								const IconComponent = iconMap[link.icon.toLowerCase()] || GithubIcon;
								return (
									<a
										key={link.platform}
										href={link.url}
										target="_blank"
										rel="noopener noreferrer"
										className="glass hover:border-primary/40 flex items-center gap-x-2 rounded-full px-6 py-3 transition-all duration-300 border-glow-hover"
									>
										<IconComponent className="size-4" />
										<span className="font-medium text-sm tracking-wide">
											{link.platform}
										</span>
									</a>
								);
							})}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

function BorderSeparator() {
	return <div className="border-separator" />;
}

type ContactBox = React.ComponentProps<'div'> & {
	icon: LucideIcon;
	title: string;
	description: string;
};

function Box({
	title,
	description,
	className,
	children,
	...props
}: ContactBox) {
	return (
		<div
			className={cn(
				'flex flex-col justify-between border-b md:border-r md:border-b-0',
				className,
			)}
		>
			<div className="bg-muted/40 flex items-center gap-x-3 border-b p-4">
				<props.icon className="text-muted-foreground size-5" strokeWidth={1} />
				<h2 className="font-heading text-lg font-medium tracking-wider">
					{title}
				</h2>
			</div>
			<div className="flex items-center gap-x-2 p-4 py-12">{children}</div>
			<div className="border-t p-4">
				<p className="text-muted-foreground text-sm">{description}</p>
			</div>
		</div>
	);
}

type CopyButtonProps = React.ComponentProps<typeof Button> & {
	text: string;
};

function CopyButton({
	className,
	variant = 'ghost',
	size = 'icon',
	text,
	...props
}: CopyButtonProps) {
	const [copied, setCopied] = React.useState<boolean>(false);

	const handleCopy = async () => {
		try {
			await navigator.clipboard.writeText(text);
			setCopied(true);
			setTimeout(() => setCopied(false), 1500);
		} catch (err) {
			console.error('Failed to copy text: ', err);
		}
	};

	return (
		<Button
			variant={variant}
			size={size}
			className={cn('disabled:opacity-100', className)}
			onClick={handleCopy}
			aria-label={copied ? 'Copied' : 'Copy to clipboard'}
			disabled={copied || props.disabled}
			{...props}
		>
			<div
				className={cn(
					'transition-all',
					copied ? 'scale-100 opacity-100' : 'scale-0 opacity-0',
				)}
			>
				<Check className="size-3.5 stroke-emerald-500" aria-hidden="true" />
			</div>
			<div
				className={cn(
					'absolute transition-all',
					copied ? 'scale-0 opacity-0' : 'scale-100 opacity-100',
				)}
			>
				<Copy aria-hidden="true" className="size-3.5" />
			</div>
		</Button>
	);
}
